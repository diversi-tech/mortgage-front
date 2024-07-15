import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap, throwError } from "rxjs";
import { User } from "../Models/user";
@Injectable()
export class loginService {
  readonly basicURL = "https://localhost:7055";
  constructor(private http: HttpClient) { }
  login(email: string, password: number): Observable<any> {
    const data={id:0,userName:"string",password:password,email:email,role:0,created_at:"2024-07-11T08:18:16.401Z",updated_at:"2024-07-11T08:18:16.401Z"};
    return this.http.post<User>(`${this.basicURL}/login`,data);
  }
}