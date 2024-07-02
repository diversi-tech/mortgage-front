
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Lead } from "../Models/Lead";

@Injectable()
export class leadService {
  readonly basicURL = "https://localhost:7055/api/";
  private LeadsSubject = new BehaviorSubject<Lead[]>([]);
  leads$ = this.LeadsSubject.asObservable();
  constructor(private http: HttpClient) {
    this.fetchLeads().subscribe(); // אתחול לקוח
  }
  fetchLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.basicURL}Leads`)
      .pipe(
        tap(leads => this.LeadsSubject.next(leads)),
        catchError(error => {
          console.error('Error fetching leads:', error);
          throw error;
        })
      );
  }
  // getLeads():Observable<Lead[]>{
  //   return this.LeadsSubject.asObservable();
  // }
  getLeadById(id: number): Lead | undefined {
    const leads = this.LeadsSubject.getValue();
    const l = leads.find(lead => lead.id === id);
    return l;
  }


  deleteCustomer(leadId: number): Observable<any> {
    const deleteUrl = `${this.basicURL}Leads/${leadId}`;
    return this.http.delete(deleteUrl)
      .pipe(
        tap(() => {
          const updatedLeads = this.LeadsSubject.getValue().filter(l => l.id !== leadId);
          this.LeadsSubject.next(updatedLeads);
        }),
        catchError(error => {
          console.error('Error deleting customer:', error);
          throw error;
        })
      );
  }
  updateLead(lead: any): Observable<Lead> {
    const updateUrl = `${this.basicURL}Leads/${lead.id}`;
    return this.http.put<Lead>(updateUrl, lead)
      .pipe(
        tap(() => {
          const leads = this.LeadsSubject.getValue();
          const index = leads.findIndex(l => l.id === lead?.id);
          if (index !== -1) {
            leads[index] = lead;
            this.LeadsSubject.next([...leads]);
          } else {
            console.error('Lead not found in the current list');
          }
        }),
        catchError(error => {
          console.error('Error updating lead:', error);
          throw error;
        })
      );
  }
  addLead(lead: Lead): Observable<Lead> {
    console.log("in addLead");
    const updateUrl = `${this.basicURL}Leads/`;
    console.log(updateUrl);
    return this.http.post<Lead>(updateUrl, lead)
      .pipe(
        tap(() => {
          console.log("in addLead tap");
          const leads = this.LeadsSubject.getValue();
          this.LeadsSubject.next([...leads, lead]);
          this.fetchLeads().subscribe(); // אתחול לקוח
          console.log("id:" + lead?.id);
        }),
        catchError(error => {
          console.error('Error deleting customer:', error);
          throw error;
        })
      );
  }


  sendLink(): string {
    /*some logic */
    return 'http://localhost:4200/';;
  }

}