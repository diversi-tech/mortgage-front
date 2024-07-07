import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7055/api/Users';
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`); // Use this.apiUrl
  }
}
