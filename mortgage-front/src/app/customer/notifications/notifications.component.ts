import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INotification } from '../../shared/Models/Notification';
import { ICustomer } from '../../shared/Models/Customer';
import { NotificationService } from '../../shared/Services/notification.service';
import { ActivatedRoute, NavigationEnd, Route } from '@angular/router';
import { customerService } from '../../shared/Services/costumer.service';
import { MatDialog } from '@angular/material/dialog';
import { OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
[x: string]: any;
customerId :number =0;
  notifications:INotification[] = [];
  newMessage: string = '';
  showActions: boolean = false;
  customer?: ICustomer;
  unreadCount: number = 0;
  unreadNotifications:INotification[]=[];

  private routerSubscription: Subscription | undefined;
  showNotifications = false;
  constructor(private notificationService :NotificationService,
      private route:ActivatedRoute,
      private customerService:customerService,
      private dialog: MatDialog,
      private router: Router,
      private loginService: loginService
    ){}

 async ngOnInit(): Promise<void> {
    this.customerId = +this.route.snapshot.paramMap.get('id')!;
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.customerId = parseInt(idParam, 10);
        if (isNaN(this.customerId)) {
          console.error('Invalid ID in URL');
          // טיפול בשגיאה - למשל, ניווט לדף שגיאה
        } else {
          this.loadNotifications();
        }
      } else {
        console.error('No ID provided in URL');
        // טיפול במקרה שאין ID
      }
    });
    this.customer=this.customerService.getCustomerById(this.customerId);
    console.log("customerId",this.customerId);
    this.routerSubscription = this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.updateChatStatusToRead();
    });   
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadNotifications():void{
  this.notificationService.getNotificationsByUserId(this.loginService.GetCurrentUser().id).subscribe({
    next: (res) => {
      this.notifications = res;
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
      notification => notification.userId == userId && notification.isRead===false);
      
    if (this.unreadNotifications.length === 0) {
      console.log("אין הודעות לא נקראות לעדכון");
      return;
    }
  
    this.unreadNotifications.forEach(notification => {
      notification.isRead = true;
      console.log("מעדכן הודעה לנקראה:", notification.id);
      this.notificationService.updateNotification(notification).subscribe({
        next: () => {
          console.log("הודעה עודכנה בהצלחה:", notification.id);
        },
        error: (error) => {
          console.error("שגיאה בעדכון הודעה:", notification.id, error);
        }
      });
    });
  
    console.log("כל ההודעות נשלחו לעדכון");
    // אפשר להוסיף כאן עדכון של התצוגה אם צריך
   // this.loadNotifications(); // רענון הנתונים
  }
 
}
