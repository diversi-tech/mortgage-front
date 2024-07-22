import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenPayload } from '../Models/Login';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class loginService {
  readonly basicURL = "https://localhost:7055/api";

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(`${this.basicURL}/Users/${email}/${password}`, { headers, responseType: 'text' });
  }

  decodeToken(token: string): TokenPayload {

    const decoded = jwtDecode(token);
    const JSONdecoder = JSON.parse(JSON.stringify(decoded));
    let currentUserId,currentUserName,currentUserRole;
    for (const key in JSONdecoder) {
          if (key.includes("nameidentifier")) {
              currentUserName = JSONdecoder[key];
          }
          else{
            if(key.includes("userid"))
              currentUserId = JSONdecoder[key];
            else
              if(key.includes("role"))
              currentUserRole = JSONdecoder[key];
          }
      }
      
      let currentUser:TokenPayload={
        userName:currentUserName,
        id:currentUserId,
        role:currentUserRole
      }

     return currentUser;
    }
}





