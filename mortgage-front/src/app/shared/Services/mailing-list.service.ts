import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable()
export class MailingListService {
  readonly basicURL = environment.apiURL + "/api/Email/";

  constructor(private http: HttpClient) {}

  sendMailingList(recipients: string[], subject: string, body: string): Observable<any> {
    const recipientsParam = recipients.join(',');
    debugger
    const url = `${this.basicURL}send-mailing-list/${recipientsParam}`;
    const requestBody = {
      subject: subject || '',
      body: body || ''
    };
    return this.http.post(url, requestBody);
  }
}

