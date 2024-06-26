import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'https://localhost:7055/api/Notifications';


  constructor(private http: HttpClient) { }


  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}`);
  }


}

























