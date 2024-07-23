import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserListService {
  apiUrl = 'https://localhost:7055/api'; // Define your API base URL here

  constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
}
  
  deleteUserById(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/Users/${id}`)
  }
}