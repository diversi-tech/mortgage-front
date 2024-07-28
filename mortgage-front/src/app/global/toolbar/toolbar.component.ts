import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { NavigatioMenuToggleService } from '../../shared/Services/navigation-menu-toggle.service';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { NotificationService } from '../../shared/Services/notification.service';
import { loginService } from '../../shared/Services/login.service';
import { Router } from '@angular/router';

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

  private subscription?: Subscription;

  constructor(
    private NavigationMenuToggleService: NavigatioMenuToggleService,
    private notificationService: NotificationService,
    private documentService: DocumentsListCustomerService,
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
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loginOrLogout(): void {
    if (this.isLoggedIn) {
      this.user = 'אורח';
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
    // const userId = this.loginService.CurrentcustomerId ?? -1;
    let userId:number=0;
    if (typeof window !== 'undefined' && window.sessionStorage)
    userId=this.loginService.decodeToken(sessionStorage.getItem('token')||"").customerId||-1;
    this.notificationService.getNotificationsByUserId(userId).subscribe(
      (notifications) => {
        const unreadNotifications = notifications.filter(notification => !notification.isRead);
        this.unreadNotificationsCount = unreadNotifications.length;
        this.hasUnreadNotifications = this.unreadNotificationsCount > 0;
      },
      (error) => {
        console.error('שגיאה בטעינת התראות:', error);
        this.unreadNotificationsCount = 0;
        this.hasUnreadNotifications = false;
      }
    );
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if(this.hasPendingDocuments )
    // הצגת הודעת אזהרה בעת רענון או עזיבת הדף
    $event.returnValue = 'שינויים שביצעת לא ישמרו אם תעזוב את הדף!';
  }

  checkPendingDocuments() {
    this.hasPendingDocuments = this.documentService.selectedDocuments.filter(file => file != null && file != undefined).length > 0;
    // console.log("this.hasPendingDocuments=" + this.hasPendingDocuments);

  }

  openNotifications() {
    // console.log('Opening notifications');
    // console.log("this.unreadNotificationsCount=" + this.unreadNotificationsCount);
  }

  openDocuments() {
    // console.log('Opening documents');
    this.router.navigate(['customer/document-list'])
  }
}
