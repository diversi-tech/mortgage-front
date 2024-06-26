import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) { }

  noti?: Notification | undefined;


  ngOnInit(): void {
    this.notificationService.getAllNotifications().subscribe(noti => this.notifications =
      noti, err => { console.log(err) });
  };



}


