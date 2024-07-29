import { Component, OnInit } from '@angular/core';
import { INotification } from '../../shared/Models/Notification';
import { ICustomer } from '../../shared/Models/Customer';
import { NotificationService } from '../../shared/Services/notification.service';
import { ActivatedRoute, Route } from '@angular/router';
import { customerService } from '../../shared/Services/costumer.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  userId :number =0;
  notifications:INotification[] = [];
  newMessage: string = '';
  showActions: boolean = false;
  customer?: ICustomer;
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
    ){

  }

 async ngOnInit(): Promise<void> {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    //await this.notificationService.getNotifications();
    this.customer=this.customerService.getCustomerById(1);
    this.loadNotifications();
  }


  loadNotifications():void{
   this.notificationService.getNotificationsByUserId(1).subscribe({
    next:(res)=>{
      this.notifications =res;
    },
    error:(error)=>{
      console.error('Error fetching notifications', error);
    }
   })
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  markAsRead(notification: { read: boolean; }) {
    notification.read = true;
  }

}
