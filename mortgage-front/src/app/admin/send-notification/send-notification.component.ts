import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../shared/Services/notification.service';
import { INotification } from '../../shared/Models/Notification';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
import { ICustomer } from '../../shared/Models/Customer';
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
  customer?: ICustomer;

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
    this.notificationService.getNotificationsByCustomerId(this.userId).subscribe(
      (data) => {
        this.notifications = data;
        this.calculateStatistics();
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  sendNotification(): void {
    if (this.newMessage.trim()) {
      const formattedMessage = this.newMessage.replace(/\n/g, '<br>');
      var newNotification: INotification = {
        userId: this.userId,
        id: 0,
        message: formattedMessage,
        isRead: false,
        created_at: new Date()
      };
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { notification } // Pass user object as data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notificationService.deleteNotification(notification.id).subscribe(
          () => this.loadNotifications(),
          (error) => console.error('Error deleting notification', error)
        );
      } else {
        console.log('User cancelled the dialog');
      }
    });
  }

  sendEmail(notification: any) {
    const subject = encodeURIComponent('שלום '+this.customer?.first_Name);
    const body = encodeURIComponent(notification.message);
    const mailtoLink = `mailto:${this.customer?.email}?subject=${subject}&body=${body}`;
    
    // פותח את לקוח הדוא"ל עם המייל שנוצר
    window.location.href = mailtoLink;
  }
  // משתנה למעקב אחר מצב התצוגה של הסטטיסטיקות
  showStatistics = false;

  toggleStatistics(): void {
    this.showStatistics = !this.showStatistics;
  }

  readCount: number = 0;
  unreadCount: number = 0;
  messagesTodayRead: number = 0;
  messagesTodayUnread:number=0;
  chartOptions: any = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "סטטיסטיקות הודעות",
      fontSize: 20
    },
    axisY: {
      title: "מספר הודעות"
    },
    data: [
      {
        type: "column",
        name: "קריאה",
        showInLegend: true,
        legendText: "סטטוס קריאה",
        dataPoints: [
          { label: "נקראו", y: this.readCount },
          { label: "לא נקראו", y: this.unreadCount }
        ]
      },
      {
        type: "line",
        name: "נשלחו היום",
        showInLegend: true,
        legendText: "נשלחו היום",
        dataPoints: [
          { label: "נקראו", y: this.messagesTodayRead },
          { label: "לא נקראו", y: this.messagesTodayUnread }
        ]
      }
    ],
    legend: {
      cursor: "pointer",
      itemclick: function (e: any) {
        if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    }
  };
  
  // חישוב הסטטיסטיקות
  calculateStatistics(): void {
    this.readCount = this.notifications.filter(n => n.isRead).length;
    this.unreadCount = this.notifications.length - this.readCount;
    const today = new Date().setHours(0, 0, 0, 0);
    this.messagesTodayRead = this.notifications.filter(n => n.isRead && new Date(n.created_at).getTime() >= today).length;
    this.messagesTodayUnread = this.notifications.filter(n => !n.isRead && new Date(n.created_at).getTime() >= today).length;
    this.updateChart(); // עדכון הגרף
  }
  
  // עדכון הגרף
  updateChart(): void {
    this.chartOptions.data[0].dataPoints = [
      { label: "נקראו", y: this.readCount },
      { label: "לא נקראו", y: this.unreadCount }
    ];
    this.chartOptions.data[1].dataPoints = [
      { label: "נקראו", y: this.messagesTodayRead },
      { label: "לא נקראו", y: this.messagesTodayUnread }
    ];
  }
}  