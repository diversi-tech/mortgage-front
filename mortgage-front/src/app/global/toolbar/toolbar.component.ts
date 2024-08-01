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
  user: string = 'אורח';
  notifications: INotification[] = [];
  private subscription?: Subscription;

  constructor(
    private NavigationMenuToggleService: NavigatioMenuToggleService,
    public notificationService: NotificationService,
    public documentService: DocumentsListCustomerService,
    private customerService: customerService,
    public loginService: loginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.NavigationMenuToggleService.toggle();
    this.notificationService.checkNotifications();
    // Subscribe to selectedDocuments changes
    this.subscription = this.documentService.selectedDocuments$.subscribe(() => {
      this.documentService.checkPendingDocuments();
    });
  }

logOut(){
  if(this.loginService.isLoggedIn()){
    this.loginService.Logout()
  }
}
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  logout() {
    if (typeof window && window.sessionStorage != undefined)
      sessionStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }
  loginOrLogout(): void {
this.notificationService.checkNotifications();
this.documentService.checkPendingDocuments();
  }
  toggleNavigationMenu() {
    this.NavigationMenuToggleService.toggle();
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.documentService.hasNotSavedDoc) {
      $event.returnValue = 'שינויים שביצעת לא ישמרו אם תעזוב את הדף!';
    }
  }
  openNotifications() {
    this.router.navigate([`customer/notifications/${this.loginService.GetCurrentUser().customerId}`])
  }
  openDocuments() {
    this.router.navigate(['customer/document-list'])
  }
}
