import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INotification } from '../Models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  getNotifications() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://localhost:7055/api/Notification';

  constructor(private http: HttpClient) { }

  getNotificationsByUserId(userId: number): Observable<any[]> {
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
}
