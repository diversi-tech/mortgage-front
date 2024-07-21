import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable()
export class MailingListService {
    readonly basicURL = 'https://localhost:7055/api/Email/';

    constructor(private http: HttpClient) { }

    sendMailingList(recipients: string[], subject: string, body: string): Observable<any> {
      const recipientsParam = recipients.join(',');
      const url = `${this.basicURL}send-mailing-list/${recipientsParam}`;
      const requestBody = {
        subject: subject || '', // Ensure subject is not null
        body: body || ''        // Ensure body is not null
      };
      return this.http.post(url, requestBody);
      }
}