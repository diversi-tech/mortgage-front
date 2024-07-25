import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../shared/Services/notification.service';
import { INotification } from '../../shared/Models/Notification';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
import { Customer } from '../../shared/Models/Customer';
import { customerService } from '../../shared/Services/costumer.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {
  userId: number = 0;
  notifications: INotification[] = [];
  newMessage: string = '';
  showActions: boolean = false;
  customer?: Customer;
  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private customerService: customerService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    await this.customerService.fetchCustomers();
    this.customer = this.customerService.getCustomerById(this.userId);
    this.loadNotifications();
  }
  toggleActions(notification: any): void {
    this.showActions = !this.showActions;
  }
  loadNotifications(): void {
    console.log("user id" + this.userId);
    this.notificationService.getNotificationsByUserId(this.userId).subscribe(
      (data) => {
        this.notifications = data;
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  sendNotification(): void {
    if (this.newMessage.trim()) {
      var newNotification: INotification = {
        userId: this.userId,
        id: 0,
        message: this.newMessage,
        isRead: false,
        created_at: new Date()
      }
      this.notificationService.sendNotification(newNotification).subscribe(
        () => {
          this.loadNotifications();
          this.newMessage = '';
        },
        (error) => {
          console.error('Error sending notification', error);
        }
      );
    }
  }
  openEditDialog(notification: INotification): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '100vw',
      data: { ...notification }
    });

    dialogRef.afterClosed().subscribe((result: INotification) => {
      if (result) {
        this.notificationService.updateNotification(result).subscribe(
          () => this.loadNotifications(),
          (error) => console.error('Error updating notification', error)
        );
      }
    });
  }

  deleteNotification(notification: INotification): void {
    console.log(notification);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { notification } // Pass user object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notificationService.deleteNotification(notification.id).subscribe(
          () => this.loadNotifications(),
          (error) => console.error('Error deleting notification', error)
        );
      }
      else {
        console.log('User cancelled the dialog');
      }
    }
    );
  }
}
