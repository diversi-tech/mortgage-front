import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { ITokenPayload } from '../Models/TokenPayload';
import { jwtDecode } from "jwt-decode";
import { environment } from '../../../environments/environment';
import { Role } from '../Models/user';
import { log } from 'node:console';


@Injectable({
  providedIn: 'root'
})
export class loginService {

  readonly basicURL = environment.apiURL;
  currentUser: ITokenPayload = {
    id: -1,
    userName: '',
    role: Role.None,
    customerId: -1
  };
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
    return this.http.post(`${this.basicURL}/api/Users/login`, user, { headers, responseType: 'text' }).pipe();;
  }

  decodeToken(token: string): ITokenPayload {
    if (!token) {
      throw new Error('Token is empty');
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Token structure is invalid');
    }
    try {
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
    }
    catch (error) {
      console.error('Invalid token:', error);
    }
    return this.currentUser;
  }

  GetToken() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      return sessionStorage.getItem("token");
    } else {
      console.error('sessionStorage is not available.');
      return null;
    }
  }

  GetCurrentUser() {

    if (typeof window !== 'undefined' && window.sessionStorage) {
      if (sessionStorage.getItem("token") != null) {
        this.currentUser = this.decodeToken(sessionStorage.getItem("token") || "");
      }
    }
    return this.currentUser;
  }
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return !!sessionStorage.getItem('token');
    }
    return false;
  }
  isAdmin(): boolean {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      let token = sessionStorage.getItem('token') || "";
      if (token === '') return false;
      let currentUser: ITokenPayload = this.decodeToken(token);
      return String(currentUser.role) == "Admin";
    }
    return false
  }
  Logout() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem("token")
    }
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