import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { NavigatioMenuToggleService } from '../../shared/Services/navigation-menu-toggle.service';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { NotificationService } from '../../shared/Services/notification.service';
import { loginService } from '../../shared/Services/login.service';
import { Router } from '@angular/router';
import { ICustomer } from '../../shared/Models/Customer';
import { customerService } from '../../shared/Services/costumer.service';
import { INotification } from '../../shared/Models/Notification';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [NavigationMenuComponent]
})
export class ToolbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  showLogout: boolean = false;
  showMainMenu: boolean = false;
  user: string = 'אורח';
  unreadNotificationsCount: number = 0;
  hasUnreadNotifications: boolean = false;
  hasPendingDocuments: boolean = false;
  display:boolean=false;

  notifications: INotification[] = [];
  unreadNotificationsCount2: number = 0;
  hasUnreadNotifications2: boolean = false;

  private subscription?: Subscription;

  constructor(
    private NavigationMenuToggleService: NavigatioMenuToggleService,
    private notificationService: NotificationService,
    private documentService: DocumentsListCustomerService,
    private customerService: customerService,
    public loginService: loginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.NavigationMenuToggleService.toggle();
    this.checkNotifications();
    // Subscribe to selectedDocuments changes
    this.subscription = this.documentService.selectedDocuments$.subscribe(() => {
      this.checkPendingDocuments();
    });
   // this.loadNotifications();

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loginOrLogout(): void {
    if (this.isLoggedIn) {
      var customerId: number = this.loginService.GetCurrentUser().customerId || 0;
      var currentCustomer: ICustomer | undefined;
      currentCustomer = this.customerService.getCustomerById(customerId);
      this.user = currentCustomer?.first_Name + " " + currentCustomer?.last_Name;
      // this.user = 'אורח';
      this.isLoggedIn = false;
    } else {
      this.user = 'משה שוורץ';
      this.isLoggedIn = true;
    }
    this.checkNotifications();
    this.checkPendingDocuments();
  }


  toggleNavigationMenu() {
    this.NavigationMenuToggleService.toggle();
  }

  checkNotifications() {
    let userId: number = 0;
    if (typeof window !== 'undefined' && window.sessionStorage)
      userId = this.loginService.decodeToken(sessionStorage.getItem('token') || "").customerId || -1;
    this.notificationService.getNotificationsByUserId(userId).subscribe(
      (notifications) => {
        const unreadNotifications = notifications.filter(notification => !notification.isRead);
        this.unreadNotificationsCount2 = unreadNotifications.length;
        this.hasUnreadNotifications = this.unreadNotificationsCount2 > 0;
      },
      (error) => {
        console.error('שגיאה בטעינת התראות:', error);
        this.unreadNotificationsCount2 = 0;
        this.hasUnreadNotifications2 = false;
      }
    );
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.hasNotSavedDoc) {
       $event.returnValue = 'שינויים שביצעת לא ישמרו אם תעזוב את הדף!';
       console.log('in if');
       
       }
    else {
      console.log('in');

    }
  }
  hasNotSavedDoc:boolean=false;
  checkPendingDocuments() {

    this.documentService.documents$.subscribe(
      (documents) => {
        this.hasNotSavedDoc = this.documentService.selectedDocuments.filter(file => file != null && file != undefined).length > 0;
        this.hasPendingDocuments = documents.some(document => document.status === 0);
      },
      (error) => {
        console.error('שגיאה בטעינת ד');
      }
    )
    // this.hasPendingDocuments = this.documentService.selectedDocuments.filter(file => file != null && file != undefined).length > 0;

  }

  openNotifications() {
  // this.display=!this.display; 
  // console.log('in display='+this.display);
  this.router.navigate([`customer/notifications/${this.loginService.GetCurrentUser().customerId}`])
  }
  // loadNotifications() {
  //   this.notificationService.getNotificationsByUserId(this.loginService.GetCurrentUser().id).subscribe({
  //     next: (res) => {
  //       this.notifications = res;
  //       this.updateUnreadCount();
  //     },
  //     error: (error) => {
  //       console.error('Error fetching notifications', error);
  //     }
  //   });
  // }


  updateUnreadCount() {
    this.unreadNotificationsCount2 = this.notifications.filter(n => !n.isRead).length;
    this.hasUnreadNotifications2 = this.unreadNotificationsCount2 > 0;
  }

  onNotificationRead(notification: INotification) {
    const index = this.notifications.findIndex(n => n.id === notification.id);
    if (index !== -1) {
      this.notifications[index] = notification;
      this.updateUnreadCount();
    }
  }

  openDocuments() {
    this.router.navigate(['customer/document-list'])
  }
}
