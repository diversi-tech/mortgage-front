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


@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
[x: string]: any;
  userId :number =0;
  notifications:INotification[] = [];
  newMessage: string = '';
  showActions: boolean = false;
  customer?: ICustomer;
  unreadCount: number = 0;
  user:INotification ={
    id: 0,
    userId: 0,
    message: '',
    isRead: false,
    created_at: new Date()
  };
  private routerSubscription: Subscription | undefined;

  // @Input() notifications2: INotification[] = [];
  // @Input() unreadCount2: number = 0;
  //@Output() notificationRead = new EventEmitter<INotification>();
  // notifications = [
  //   { id: 1, message: 'הודעה חדשה מהבוס', read: false },
  //   { id: 2, message: 'פגישה מתקרבת', read: true },
  //   // הוסף עוד הודעות לפי הצורך
  // ];
  showNotifications = false;
  constructor(private notificationService :NotificationService,
      private route:ActivatedRoute,
      private customerService:customerService,
      private dialog: MatDialog,
      private router: Router
    ){

  }

 async ngOnInit(): Promise<void> {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.userId = parseInt(idParam, 10);
        if (isNaN(this.userId)) {
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
    this.customer=this.customerService.getCustomerById(this.userId);
    console.log("userId",this.userId);

    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(() => {
      this.updateChatStatusToRead();
    });
    this.loadNotifications();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadNotifications():void{
   this.notificationService.getNotificationsByUserId(2).subscribe({
    next:(res)=>{
      this.notifications =res;
      this.unreadCount = this.notifications.filter(n => !n.isRead).length;
    },
    error:(error)=>{
      console.error('Error fetching notifications', error);
    }
   })
  }

  updateChatStatusToRead(): void {
    this.notifications
  .filter(notification => notification.userId ===2 && notification.isRead === false)
  .forEach(notification => {
    notification.isRead = true;
    this.notificationService.updateNotification(notification).subscribe(
      {
        next:()=> {console.log("notification",notification)},
       error:()=>{console.log("היי לא הצלחתי לעדכן");
       }
        
      }
    );
  });
  }
  // toggleNotifications(): void {
  //   this.loadNotifications();
  // }
 
}
