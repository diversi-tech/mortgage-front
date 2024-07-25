import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders , HttpErrorResponse} from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { User } from "../Models/user";
import { environment } from "../../../environments/environment";
import { log } from "node:console";
import { response } from "express";
//import { Lead } from "../Models/Lead";

@Injectable()
 export class UserService {
  readonly basicURL =environment.apiURL+ "/api/";
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();
  constructor(private http: HttpClient) {
    this.fetchUsers().subscribe();
  }
  fetchUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // שורה זו חשובה לפיתוח
    };
    return this.http.get<User[]>(`${this.basicURL}Users`, httpOptions)
      .pipe(
        tap(users => this.usersSubject.next(users)),
        catchError(error => {
          console.error('Error fetching users:', error);
          throw error;
        })
      );
  }
  createUser(user: User) {
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
  //  createUser(user: User): Observable<User> {
  //   console.log("in addLead");
  //   const updateUrl = `${this.basicURL}Users/`;
  //   console.log(updateUrl);
  //   return this.http.post<User>(updateUrl, user)
  //     .pipe(
  //       tap(() => {
  //         console.log("in addLead tap");
  //         const users = this.usersSubject.getValue();
  //         this.usersSubject.next([...users, user]);
  //         this.fetchUsers().subscribe(); // אתחול לקוח
  //         console.log("id:" + user?.id);
  //       }),
  //       catchError(error => {
  //         console.error('Error added customer:', error);
  //         throw error;
  //       })
  //     );
  // }
  //  createUser(user: User): Observable<User> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     }),
  //     withCredentials: true
  //   };
  //   return this.http.post<User>(`${this.basicURL}Users`, user, httpOptions);
  // }

  

  IsExist(user: User): Observable<string> {

    console.log('Checking if user exists:', user); // הדפסה של המשתמש שנשלח לבדיקה

    return this.http.post<User>('https://localhost:7055/login', user).pipe(

      map(response=> {

        console.log("IsExist response:", response);

        if (response !== null && response !== undefined) {

          console.log('User exists');

          return '200';

        } else  {

          console.log('User does not exist');

          return '404';

        }

      }),

      catchError((error: HttpErrorResponse) => {

        if (error.status === 404) {

          console.error('User not found:', error.error);

          return of('404'); // או התגובה המתאימה למקרה של משתמש שלא נמצא

        } else {

          console.error('Error checking if user exists:', error);

          return of('Error: Unable to access the server');

        }

      })

    );

  }



  login(password: string, email: string) {
    const user = {
      userName: "string",
      password: password,
      email: email,
      role: 0,
      created_at: "2024-07-22T16:45:56.650404",
      updated_at: "2024-07-22T16:45:56.650408"
    }
    console.log("in login service");
    return this.http.post(`${this.basicURL}Users/login`, user);
  }
}