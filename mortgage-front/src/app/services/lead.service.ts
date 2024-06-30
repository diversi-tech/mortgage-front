
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Lead } from "../Models/Lead";

@Injectable()
export class leadService {
  readonly basicURL = "https://localhost:7055/api/";
  private LeadsSubject = new BehaviorSubject<Lead[]>([]);
  leads$ = this.LeadsSubject.asObservable();
  constructor(private http:HttpClient) {
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
  getLeads():Observable<Lead[]>{
    return this.LeadsSubject.asObservable();
  }
  getLeadById(id:number):Lead|undefined{
    const leads=this.LeadsSubject.getValue();
    const l=leads.find(lead=>lead.id===id);
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


  sendLink(): string {
    /*some logic */
    return 'http://localhost:4200/';;
  }

}