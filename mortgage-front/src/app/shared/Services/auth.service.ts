import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { TokenPayload } from '../Models/Login';
import { jwtDecode } from "jwt-decode";
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: BehaviorSubject<string | "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InNhcmEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsInVzZXJpZCI6IjQyIiwiY3VzdG9tZXJJZCI6Ii0xIiwiZXhwIjoxNzIxOTAzODI0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDU1LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTUvIn0.VYDmY895-7q8nmOvb9T7zsFj1Die1vTPH1MzRKSzdOg"> = new BehaviorSubject<string | "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InNhcmEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsInVzZXJpZCI6IjQyIiwiY3VzdG9tZXJJZCI6Ii0xIiwiZXhwIjoxNzIxOTAzODI0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDU1LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTUvIn0.VYDmY895-7q8nmOvb9T7zsFj1Die1vTPH1MzRKSzdOg">("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InNhcmEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsInVzZXJpZCI6IjQyIiwiY3VzdG9tZXJJZCI6Ii0xIiwiZXhwIjoxNzIxOTAzODI0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDU1LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTUvIn0.VYDmY895-7q8nmOvb9T7zsFj1Die1vTPH1MzRKSzdOg");

  readonly basicURL = environment.apiURL+"/api";
  constructor(private http: HttpClient) {    }
   login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(`${this.basicURL}/Users/${email}/${password}`, { headers, responseType: 'text'})
      // .pipe(
      //   tap(token => this.token.next(token))
        
      // );
      
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
  // isLoggedIn(): string | null {
  //   // just for example:
  //   // return true;
  //   // after merge with the git :
  //   if (typeof window !== 'undefined')
  //     return sessionStorage.getItem('token');
  //   return ""
  // }

  isLoggedIn(): boolean | null {
    // just for example:
    // return true;
    // after merge with the git :
    // if (typeof window !== 'undefined')
    //   return sessionStorage.getItem('token');
    // console.log("token",this.token.getValue());
    
    return true
  }

  isAdmin(): boolean {
    // just for example:
    // return true;
    // after merge with the git :
    // if (this.isLoggedIn()&&typeof window !== 'undefined') {
    //   let currentUser: TokenPayload = this.decodeToken(sessionStorage.getItem('token'));
    //   return String(currentUser.role) === 'Admin';
    // }
    return true;
  }
}