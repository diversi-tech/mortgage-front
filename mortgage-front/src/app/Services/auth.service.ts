import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITokenPayload } from '../Models/TokenPayload';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly basicURL = "https://localhost:7055/api";
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(`${this.basicURL}/Users/${email}/${password}`, { headers, responseType: 'text' });
  }
  decodeToken(token: string|null): ITokenPayload {
    let currentUserId=-1,currentUserName='',currentUserRole=-1;
    if(token){//check if not null
      const decoded = jwtDecode(token);
      const JSONdecoder = JSON.parse(JSON.stringify(decoded));
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
    }
    let currentUser:ITokenPayload={
      userName:currentUserName,
      id:currentUserId,
      role:currentUserRole
    }
    return currentUser
  }
    isLoggedIn(): boolean {
      // just for example:
      return true;
      // after merge with the git :
      // return !!localStorage.getItem('token');
    }
    isAdmin():boolean{
      // just for example:
      return true;
      // after merge with the git :
      // if(this.isLoggedIn()){
      //   let currentUser:TokenPayload=this.decodeToken( localStorage.getItem('token'));
      //   return currentUser.role===0;
      // }
      // return false;
    }
}