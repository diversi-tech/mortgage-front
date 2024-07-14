import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Lead } from "../Models/Lead";
import { environment } from "../../environments/environment.development";

@Injectable()
export class leadService {
  //readonly basicURL = "https://localhost:7055/api/";
  private apiUrl=  `${environment.apiURL}/api/`;
  private LeadsSubject = new BehaviorSubject<Lead[]>([]);
  leads$ = this.LeadsSubject.asObservable();
  constructor(private http: HttpClient) {
    this.fetchLeads().subscribe(); // אתחול לקוח
  }
  fetchLeads(): Observable<Lead[]> {  
    console.log("trung to get to lead");
    //, { withCredentials: true }
    return this.http.get<Lead[]>(`${this.apiUrl}Leads`)
      .pipe(
        tap(leads => this.LeadsSubject.next(leads)),
        catchError(error => {
          // console.error('Error fetching leads:', error);
          throw error;
        })
      );
  }
  getLeads():Observable<Lead[]>{
    return this.LeadsSubject.asObservable();
  }
  getLeadById(id: number): Lead | undefined {
    const leads = this.LeadsSubject.getValue();
    const l = leads.find(lead => lead.id === id);
    return l;
  }


  deleteCustomer(leadId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}Leads/${leadId}`;
    return this.http.delete(deleteUrl)
      .pipe(
        tap(() => {
          const updatedLeads = this.LeadsSubject.getValue().filter(l => l.id !== leadId);
          this.LeadsSubject.next(updatedLeads);
        }),
        catchError(error => {
          // console.error('Error deleting customer:', error);
          throw error;
        })
      );
  }
  updateLead(lead: any): Observable<Lead> {

    const updateUrl = `${this.apiUrl}Leads/${lead.id}`;
    return this.http.put<Lead>(updateUrl, lead)
      .pipe(
        tap(() => {
          const leads = this.LeadsSubject.getValue();          
          const index = leads.findIndex(l => l.id === lead?.id);
          if (index !== -1) {
            leads[index] = lead;
            this.LeadsSubject.next([...leads]);
            this.fetchLeads().subscribe(); // אתחול לקוח
          } else {
            // console.error('Lead not found in the current list');
          }
        }),
        catchError(error => {
          // console.error('Error updating lead:', error);
          throw error;
        })
      );
  }
  addLead(lead: Lead): Observable<Lead> {
    console.log("in addLead");
    const updateUrl = `${this.apiUrl}Leads/`;
    console.log(updateUrl);
    return this.http.post<Lead>(updateUrl, lead)
      .pipe(
        tap((res) => {
          console.log(res);
          console.log("in addLead tap");
          const leads = this.LeadsSubject.getValue();
          this.LeadsSubject.next([...leads, res]);
          console.log("id:" + res?.id);
        }),
        catchError(error => {
          // console.error('Error deleting customer:', error);
          throw error;
        })
      );
  }


  sendLink(): string {
    /*some logic */
    return 'http://localhost:4200/';;
  }
  
  checkToken(id:number): Observable<HttpResponse<string>>{
    console.log("i am here");
    return this.http.get<string>(`${this.apiUrl}Email/validate-magic-link/${id}`,{ observe: 'response', responseType: 'text' as 'json'  })
  }

}