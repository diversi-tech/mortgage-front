import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserListService {
  apiUrl = 'https://localhost:7055/api'; // Define your API base URL here

  constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

  getUsers(): Observable<IUser[]> {
    console.log('getUser')
    return this.http.get<IUser[]>(`${this.apiUrl}/users`);
}
  
  deleteUserById(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/Users/${id}`)
  }
}
