import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, timeout } from 'rxjs';
import { TokenPayload } from '../Models/Login';
import { jwtDecode } from "jwt-decode";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class loginService {
  public token: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  readonly basicURL = environment.apiURL;
  currentUser: TokenPayload = {};
  CurrentcustomerId?: number;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
    const user = {
      userName: "string",
      password: password,
      email: email,
      role: 0,
      created_at: null,
      updated_at: null
    };
    return this.http.post(`${this.basicURL}/api/Users/login`, user, { headers, responseType: 'text'}).pipe( 
      tap(token => {this.token.next(token);
      })
    );;

  }



  decodeToken(token: string): TokenPayload {
    // console.log("token=" + token);
    const decoded = jwtDecode(token);
    const JSONdecoder = JSON.parse(JSON.stringify(decoded));
    let currentUserId, currentUserName, currentUserRole, currentCustomerId;
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
          else
            if (key.includes("customerId"))
              currentCustomerId = JSONdecoder[key];
      }
    }
    this.currentUser.userName = currentUserName;
    this.currentUser.role = currentUserRole;
    this.currentUser.id = currentUserId;
    this.currentUser.customerId = currentCustomerId;
    return this.currentUser;
  }

  GetCurrentUser() {
    if (typeof window !== 'undefined' && window.sessionStorage)
      this.currentUser = this.decodeToken(sessionStorage.getItem("token") || "");
    return this.currentUser;
  }
  isLoggedIn(): boolean {
    // just for example:
    // return true;
    // after merge with the git :
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return !!sessionStorage.getItem('token');
    }
    return false;
  }
  isAdmin(): boolean {
    // just for example:
    // return true;
    // after merge with the git :
    // if(this.isLoggedIn()){
    //   let currentUser:TokenPayload=this.decodeToken( localStorage.getItem('token'));
    //   return currentUser.role===0;
    // }
    // return false;
    if (this.isLoggedIn()) {
      let token = sessionStorage.getItem('token') || "";
      let currentUser: TokenPayload = this.decodeToken(token);
      return String(currentUser.role) == "Admin";
    }
    return false;
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.basicURL}/password/${email}`, {});
  }
  updatePassword(password: string, id: number): Observable<any> {
    console.log("in updatePassword");
    const user = {
      userName: "string",
      password: password,
      email: "string",
      role: 0,
      created_at: null,
      updated_at: null
    };
    return this.http.put(`${this.basicURL}/api/Users/${id}`, user);
  }
}