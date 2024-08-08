import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { IUser, Role } from "../Models/user";
import { environment } from "../../../environments/environment";
import { log } from "node:console";
import { response } from "express";
import { loginService } from "./login.service";


@Injectable()

 export class UserService {
  readonly basicURL =environment.apiURL+"/api/";
  private usersSubject = new BehaviorSubject<IUser[]>([]);
  users$ = this.usersSubject.asObservable();
  constructor(private http: HttpClient,private loginservice:loginService) { 
    if(this.loginservice.isAdmin())
    this.fetchUsers().subscribe();
   }
   
  fetchUsers(): Observable<IUser[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // this line is important for developing
    };
    return this.http.get<IUser[]>(`${this.basicURL}Users`, httpOptions)
      .pipe(
        tap(users => this.usersSubject.next(users)),
        catchError(error => {
          console.error('Error fetching users:', error);
          throw error;
        })
      );
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`${this.basicURL}Users/${id}`)
      .pipe(
        tap(() => {
          const currentUsers = this.usersSubject.getValue();
          const updatedUsers = currentUsers.filter(user => user.id !== id);
          this.usersSubject.next(updatedUsers);
        }),
        catchError(error => {
          console.error('Error deleting user:', error);
          throw error;
        })
      );
  }
  
  createUser(user: IUser) {
    const formData: FormData = new FormData();
    if (user.id !== undefined) formData.append('Id', user.id.toString());
    if (user.userName !== undefined) formData.append('UserName', user.userName);
    if (user.password !== undefined) formData.append('Password', user.password);
    if (user.email !== undefined) formData.append('Email', user.email);
    if (user.role !== undefined) formData.append('Role', user.role.toString());
    if (user.created_at !== undefined) formData.append('Created_at', user.created_at.toISOString());
    if (user.updated_at !== undefined) formData.append('Updated_at', user.updated_at.toISOString());
    return this.http.post(`${this.basicURL}Users`, user);
  }


  createUserForLead(user: IUser, leadId: number): Observable<IUser> {
    const formData: FormData = new FormData();
    if (user.id !== undefined) formData.append('Id', user.id.toString());
    if (user.userName !== undefined) formData.append('UserName', user.userName);
    if (user.password !== undefined) formData.append('Password', user.password);
    if (user.email !== undefined) formData.append('Email', user.email);
    if (user.role !== undefined) formData.append('Role', user.role.toString());
    if (user.created_at !== undefined) formData.append('Created_at', user.created_at.toISOString());
    if (user.updated_at !== undefined) formData.append('Updated_at', user.updated_at.toISOString());
    let roleId;
    if (user.role == Role.Admin)
      roleId = 0;
    else
      roleId = 1;
    return this.http.post<IUser>(`${this.basicURL}Users/Lead${leadId}`, { ...user, role: roleId });
  }
  

  IsExist(user: IUser): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
    console.log('Checking if user exists:', user);
    let roleId = user.role == Role.Admin ? 0 : 1;  
    return this.http.post<any>(this.basicURL + 'Users/login', { ...user, role: roleId,headers, responseType: 'text' })
    .pipe(
      map((response) => {
        console.log("IsExist response:", response);
        if (response && response.token) {
          console.log('User exists');
          sessionStorage.setItem("token", response.token);
          return '200';
        } else {
          console.log('User does not exist');
          return '404';
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error checking if user exists:', error);
  
        // Handle 404 error as a normal case, not an error.
        if (error.status === 404) {
          console.log('User not found:', error.error);
          return of('404');
        }
        return of('Error: Unable to access the server');
      })
    );
  }

  
  updateUser(updatedUser: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.basicURL}Users/${updatedUser.id}`, updatedUser).pipe(
      tap(() => {
        const users = this.usersSubject.getValue();          
        const index = users.findIndex(l => l.id === updatedUser?.id);       
        this.fetchUsers().subscribe(); 
      }),  
    );
  }

  getUserById(id: number): Observable<any> {
    return this.users$.pipe(
      map(users => users.find(user => user.id === id)),
    );
  }

  addUser(newuser: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.basicURL}Users`, newuser)
    .pipe(
      tap(() => { this.fetchUsers().subscribe(); }))
  }



}

