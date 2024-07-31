import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { ILead } from "../Models/Lead";
import { environment } from "../../../environments/environment";

@Injectable()
export class magicLinkService {
    readonly basicURL=environment.apiURL+'/api/Email/';
    //https://localhost:7055/api/Email/send-magic-link?id=32

    constructor(private http:HttpClient) {}
   
  sendMagicLink(id: number): Observable<any> {
    const url = `${this.basicURL}send-magic-link?id=${id}`;
    return this.http.post(url, {}, { responseType: 'text' });
  }
}