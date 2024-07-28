import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { TokenPayload } from '../Models/Login';
import { jwtDecode } from "jwt-decode";
import { Role, User } from '../Models/user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class loginService {
  public token: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  readonly basicURL = environment.apiURL;
 currentUser:TokenPayload={};
 CurrentcustomerId?: number;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get(`${this.basicURL}/api/Users/${email}/${password}`, { headers, responseType: 'text'})
      .pipe(
        tap(token => this.token.next(token))
      );   
  }

  decodeToken(token: string): TokenPayload {
    console.log("token="+token);
    
    const decoded:any = jwtDecode(token);
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
      return this.currentUser=this.decodeToken(sessionStorage)
     
    }
    isLoggedIn(): boolean {    
      return this.token.getValue()!=null;
    }
    isAdmin():boolean{
        let currentUser:TokenPayload=this.decodeToken(this.token.getValue()!);
        return currentUser.role===Role.Admin
    }
    Logout(){
      
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