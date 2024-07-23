import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Lead } from "../Models/Lead";

@Injectable()
export class magicLinkService {
    readonly basicURL='https://localhost:7055/api/Email/';
    //https://localhost:7055/api/Email/send-magic-link?id=32

    constructor(private http:HttpClient) {}
   
  sendMagicLink(id: number): Observable<any> {
    const url = `${this.basicURL}send-magic-link?id=${id}`;
    return this.http.post(url, {}, { responseType: 'text' });
  }
}