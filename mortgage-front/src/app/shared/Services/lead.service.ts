import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { ILead } from "../Models/Lead";
import { environment } from "../../../environments/environment";
import { catchError, tap } from "rxjs/operators";
import { loginService } from "./login.service";

@Injectable()
export class leadService {
  readonly basicURL = environment.apiURL+"/api/";
  private LeadsSubject = new BehaviorSubject<ILead[]>([]);
  leads$ = this.LeadsSubject.asObservable();
  constructor(private http: HttpClient,private loginService:loginService) {
    if(this.loginService.isAdmin())
    this.fetchLeads().subscribe(); 
  }

  fetchLeads(): Observable<ILead[]> {
    return this.http.get<ILead[]>(`${this.basicURL}Leads`).pipe(
      tap(leads => this.LeadsSubject.next(leads)),
      catchError(error => {
        console.error('Error fetching leads:', error);
        throw error;
      })
    );
  }

  getLeads(): Observable<ILead[]> {
    return this.fetchLeads(); // Directly fetch from the server
  }

  getLeadById(id: number): Observable<ILead> {
    return this.http.get<ILead>(`${this.basicURL}Leads/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching lead:', error);
        throw error;
      })
    );
  }

  deleteCustomer(leadId: number): Observable<any> {
    const deleteUrl = `${this.basicURL}Leads/${leadId}`;
    return this.http.delete(deleteUrl).pipe(
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

  updateLead(lead: ILead): Observable<ILead> {
    const updateUrl = `${this.basicURL}Leads/${lead.id}`;
    return this.http.put<ILead>(updateUrl, lead).pipe(
      tap(updatedLead => {
        const leads = this.LeadsSubject.getValue();
        const index = leads.findIndex(l => l.id === lead.id);
        if (index !== -1) {
          leads[index] = updatedLead;
          this.LeadsSubject.next([...leads]);
        }
      }),
      catchError(error => {
        console.error('Error updating lead:', error);
        throw error;
      })
    );
  }

  addLead(lead: ILead): Observable<ILead> {
    const updateUrl = `${this.basicURL}Leads/`;
    return this.http.post<ILead>(updateUrl, lead).pipe(
      tap(newLead => {
        const leads = this.LeadsSubject.getValue();
        this.LeadsSubject.next([...leads, newLead]);
      }),
      catchError(error => {
        console.error('Error adding lead:', error);
        throw error;
      })
    );
  }

  sendLink(): string {
    return 'http://localhost:4200/';
  }

  checkToken(id: number): Observable<HttpResponse<string>> {
    console.log(id, "token id");
    return this.http.get<string>(`https://localhost:7055/api/Email/validate-magic-link/${id}`, { observe: 'response', responseType: 'text' as 'json' });
  }
}













// import { Injectable, OnInit } from "@angular/core";
// import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
// import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
// import { ILead } from "../Models/Lead";
// import { environment } from "../../../environments/environment";

// @Injectable()
// export class leadService implements OnInit {
//   readonly basicURL = environment.apiURL+"/api/";
//   private LeadsSubject = new BehaviorSubject<ILead[]>([]);
//   leads$ = this.LeadsSubject.asObservable();
//   constructor(private http: HttpClient) {
//    // this.fetchLeads().subscribe(); // אתחול לקוח
//   }
//   ngOnInit(): void {
//     this.fetchLeads().subscribe(); // אתחול לקוח
//   }
//   fetchLeads(): Observable<ILead[]> {
//     return this.http.get<ILead[]>(`${this.basicURL}Leads`)
//       .pipe(
//         tap(leads => this.LeadsSubject.next(leads)),
//         catchError(error => {
//           // console.error('Error fetching leads:', error);
//           throw error;
//         })
//       );
//   }
//   getLeads():Observable<ILead[]>{
//     return this.LeadsSubject.asObservable();
//   }
//   getLeadById(id: number): ILead | undefined {
//     const leads = this.LeadsSubject.getValue();
//     const l = leads.find(lead => lead.id == id);
//     return l;
//   }


//   deleteCustomer(leadId: number): Observable<any> {
//     const deleteUrl = `${this.basicURL}Leads/${leadId}`;
//     return this.http.delete(deleteUrl)
//       .pipe(
//         tap(() => {
//           const updatedLeads = this.LeadsSubject.getValue().filter(l => l.id !== leadId);
//           this.LeadsSubject.next(updatedLeads);
//         }),
//         catchError(error => {
//           // console.error('Error deleting customer:', error);
//           throw error;
//         })
//       );
//   }
//   updateLead(lead: any): Observable<ILead> {
//     const updateUrl = `${this.basicURL}Leads/${lead.id}`;
//     return this.http.put<ILead>(updateUrl, lead)
//       .pipe(
//         tap(() => {
//           const leads = this.LeadsSubject.getValue();          
//           const index = leads.findIndex(l => l.id === lead?.id);
//           if (index !== -1) {
//             leads[index] = lead;
//             this.LeadsSubject.next([...leads]);
//           } else {
//             // console.error('Lead not found in the current list');
//           }
//         }),
//         catchError(error => {
//           // console.error('Error updating lead:', error);
//           throw error;
//         })
//       );
//   }
//   addLead(lead: ILead): Observable<ILead> {
//     const updateUrl = `${this.basicURL}Leads/`;
//     return this.http.post<ILead>(updateUrl, lead)
//       .pipe(
//         tap((res) => {
//           const leads = this.LeadsSubject.getValue();
//           this.LeadsSubject.next([...leads, res]);
//         }),
//         catchError(error => {
//           // console.error('Error deleting customer:', error);
//           throw error;
//         })
//       );
//   }


//   sendLink(): string {
//     /*some logic */
//     return 'http://localhost:4200/';;
//   }
  
//   checkToken(id:number): Observable<HttpResponse<string>>{
//     console.log(id,"token id");
//     return this.http.get<string>(`https://localhost:7055/api/Email/validate-magic-link/${id}`,{ observe: 'response', responseType: 'text' as 'json'  })
//   }

// }