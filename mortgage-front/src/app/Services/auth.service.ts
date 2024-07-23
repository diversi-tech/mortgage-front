import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenPayload } from '../Models/Login';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly basicURL = "https://localhost:7055/api";
  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/';
    this.router.navigateByUrl(returnUrl);
    return this.http.get(`${this.basicURL}/Users/${email}/${password}`, { headers, responseType: 'text' });
  }

  decodeToken(token: string | null): TokenPayload {
    let currentUserId = -1, currentUserName = '', currentUserRole = -1;

    if (token) {//check if not null
      const decoded = jwtDecode(token);
      const JSONdecoder = JSON.parse(JSON.stringify(decoded));
      for (const key in JSONdecoder) {
        if (key.includes("nameidentifier")) {
          currentUserName = JSONdecoder[key];
        }
        else {
          if (key.includes("userid"))
            currentUserId = JSONdecoder[key];
          else
            if (key.includes("role"))
              currentUserRole = JSONdecoder[key];
        }
      }
    }
    let currentUser: TokenPayload = {
      userName: currentUserName,
      id: currentUserId,
      role: currentUserRole
    }
    return currentUser
  }

  isLoggedIn(): boolean {
    // just for example:
    return true;

    // after merge with the git :
    // return !!localStorage.getItem('token');
  }
  isAdmin(): boolean {
    // just for example:
    return false;
    // after merge with the git :
    // if(this.isLoggedIn()){
    //   let currentUser:TokenPayload=this.decodeToken( localStorage.getItem('token'));
    //   return currentUser.role===0;
    // }
    // return false;
  }
}