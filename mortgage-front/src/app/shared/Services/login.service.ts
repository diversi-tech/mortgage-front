import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { TokenPayload } from '../Models/Login';
import { jwtDecode } from "jwt-decode";
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class loginService {
  readonly basicURL = "https://localhost:7055";
 currentUser:TokenPayload={};
  constructor(private http: HttpClient,) {}

  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(`${this.basicURL}/api/Users/${email}/${password}`, { headers, responseType: 'text' });
  }

  decodeToken(token: string): TokenPayload {

    const decoded = jwtDecode(token);
    const JSONdecoder = JSON.parse(JSON.stringify(decoded));
    let currentUserId,currentUserName,currentUserRole,currentCustomerId;
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
            else 
               if(key.includes("customerId"))
              currentCustomerId=JSONdecoder[key];
          }
      }
      this.currentUser.userName=currentUserName;
      this.currentUser.role=currentUserRole;
      this.currentUser.id=currentUserId;
      this.currentUser.customerId=currentCustomerId;
     return this.currentUser;
    }

    GetCurrentUser(){
      return this.currentUser;
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

    resetPassword(email: string): Observable<any> {
      return this.http.post(`${this.basicURL}/password/${email}`, {});
    }
    updatePassword(password:string,id:number): Observable<any> {
      console.log("in updatePassword");
      const user={
        userName: "string",
        password:password ,
        email: "string",
        role: 0,
        created_at: null,
        updated_at: null
      };
      return this.http.put(`${this.basicURL}/api/Users/${id}`, user) ;
}
}