import { Component, OnInit } from '@angular/core';
import { INotification } from '../../shared/Models/Notification';
import { ICustomer } from '../../shared/Models/Customer';
import { NotificationService } from '../../shared/Services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { customerService } from '../../shared/Services/costumer.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationStart } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  [x: string]: any;
  customerId: number = 0;
  notifications: INotification[] = [];
  customer?: ICustomer;
  unreadCount: number = 0;
  unreadNotifications: INotification[] = [];

  private routerSubscription: Subscription | undefined;
  showNotifications = false;
  constructor(private notificationService: NotificationService,
    private route: ActivatedRoute,
    private customerService: customerService,
    private router: Router,
    private loginService: loginService
  ) { }

  async ngOnInit(): Promise<void> {
    this.customerId = +this.route.snapshot.paramMap.get('id')!;
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.customerId = parseInt(idParam, 10);
        if (isNaN(this.customerId)) {
          console.error('Invalid ID in URL');
        }
        else{
          this.loadNotifications();
        }
      }
    });
    this.customer = this.customerService.getCustomerById(this.customerId);
    this.routerSubscription = this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadNotifications(): void {
    this.notificationService.getNotificationsByCustomerId(this.customerId).subscribe({
      next: (res) => {
        this.notifications = res;
        console.log(res);
        this.updateChatStatusToRead();
        this.unreadCount = this.notifications.filter(n => !n.isRead).length;
      },
      error: (error) => {
        console.error('Error fetching notifications', error);
        // כאן תוכל להוסיף לוגיקה נוספת לטיפול בשגיאה, כמו הצגת הודעה למשתמש
      }
    });
  }

  updateChatStatusToRead(): void {
    const currentUser = this.loginService.GetCurrentUser();
    if (!currentUser || !currentUser.id) {
      console.error("אין משתמש מחובר או חסר ID");
      return;
    }
    const userId = currentUser.id;
    console.log("User ID:", userId);
  
     this.unreadNotifications = this.notifications.filter(
      notification => notification.isRead===false);
      
    if (this.unreadNotifications.length === 0) {
       console.log("אין הודעות לא נקראות לעדכון");
      return;
    }
    this.notificationService.updateNotificationsStatus(this.unreadNotifications).subscribe({
      next: (res) => {
        console.log("Notifications updated successfully");
        this.unreadCount = 0;
        this.notificationService.hasUnreadNotifications=false;
        this.notificationService.unreadNotificationsCount=0;
      },
      error: (error) => {
        console.error('Error updating notifications status', error);
      }
    });
  }


}
