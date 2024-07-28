import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders , HttpErrorResponse} from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { IUser } from "../Models/User";
import { environment } from "../../../environments/environment";
import { log } from "node:console";
import { response } from "express";
//import { Lead } from "../Models/Lead";

@Injectable()
 export class UserService {
  readonly basicURL =environment.apiURL;
  private usersSubject = new BehaviorSubject<IUser[]>([]);
  users$ = this.usersSubject.asObservable();
  constructor(private http: HttpClient) {
    this.fetchUsers().subscribe();
  }
  fetchUsers(): Observable<IUser[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // שורה זו חשובה לפיתוח
    };
    return this.http.get<IUser[]>(`${this.basicURL}/api/Users`, httpOptions)
      .pipe(
        tap(users => this.usersSubject.next(users)),
        catchError(error => {
          console.error('Error fetching users:', error);
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

  

  IsExist(user: IUser): Observable<string> {

    console.log('Checking if user exists:', user); // הדפסה של המשתמש שנשלח לבדיקה

    return this.http.post<IUser>(this.basicURL+'/login', user).pipe(

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
    return this.http.post(`${this.basicURL}/api/Users/login`, user);
  }

  updateUser(updatedUser: User): Observable<User> {
     
    const updateUrl = `${this.basicURL}/Users/${updatedUser.id}`;
    return this.http.put<User>(updateUrl, updatedUser).pipe(
      tap(() => {
        const users = this.usersSubject.getValue();          
        const index = users.findIndex(l => l.id === updatedUser?.id);       
        if (index !== -1) {
          users[index] = updatedUser;        
          this.usersSubject.next([...users]);
          this.fetchUsers().subscribe(); 
        }  
      }),  
      
    );
  }
  
  getUserById(id: number): Observable<User | undefined> {
    return this.users$.pipe(
      map(users => users.find(user => user.id === id)),
    );
  }
 
    addUser(user: User): Observable<User> {
      const updateUrl = `${this.basicURL}/Users`;
      return this.http.post<User>(updateUrl, user).pipe(
        map(newUser => {
          this.http.get<User[]>(updateUrl).subscribe(users => this.usersSubject.next(users));
          return newUser;
        })
      );
    }
  }
  
 