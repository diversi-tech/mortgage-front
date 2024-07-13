import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class UserListService {
  //apiUrl = 'https://localhost:7055/api'; // Define your API base URL here
  private apiUrl=  `${environment.apiURL}/api`;
  constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

  getUsers(): Observable<User[]> {
    console.log('getUser')
    return this.http.get<User[]>(`${this.apiUrl}/Users`);
}
  
  deleteUserById(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/Users/${id}`)
  }
}
