import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/User';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserListService {
  apiUrl = environment.apiURL+'/api'; // Define your API base URL here

  constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}/users`);
}

  deleteUserById(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/Users/${id}`)
  }
}
