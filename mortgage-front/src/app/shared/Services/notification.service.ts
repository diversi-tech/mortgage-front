import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INotification } from '../Models/Notification';
import { loginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://localhost:7055/api/Notification';
  hasUnreadNotifications:boolean=false;
  unreadNotificationsCount:number=0;
  constructor(private http: HttpClient,private loginService:loginService) { }

  getNotificationsByCustomerId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  sendNotification(notificationDto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, notificationDto);
  }
  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateNotification(notification: INotification): Observable<INotification> {
    return this.http.put<INotification>(`${this.apiUrl}/${notification.id}`, notification);
  }
  
  updateNotificationsStatus(notifications: INotification[]): Observable<INotification[]> {  
    return this.http.put<INotification[]>(`${this.apiUrl}`, notifications);
  }

  checkNotifications() {
    let customerId: number = 0;
    if (typeof window !== 'undefined' && window.sessionStorage)
      customerId = this.loginService.decodeToken(sessionStorage.getItem('token') || "").customerId || -1;
    this.getNotificationsByCustomerId(customerId).subscribe(
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
  // updateNotification(notification: INotification): Observable<INotification> {
  //   return this.http.put<INotification>(`${this.apiUrl}/notifications/${notification.id}`, notification);
  // }
}
