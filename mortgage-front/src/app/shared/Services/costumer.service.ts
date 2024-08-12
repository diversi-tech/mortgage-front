import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { ICustomer } from "../Models/Customer";
import { ILead } from "../Models/Lead";
import { environment } from "../../../environments/environment";
import { log } from "console";

@Injectable()
export class customerService {
  readonly basicURL = `${environment.apiURL}/api/`;
  private customersSubject = new BehaviorSubject<ICustomer[]>([]);
  customers$ = this.customersSubject.asObservable();
    constructor(private http: HttpClient) {
  }  fetchCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.basicURL}Customers`)
      .pipe(
        tap(customers => this.customersSubject.next(customers)),
        catchError(error => {
          throw error;
        })
      );
  }
  deleteCustomer(customerId: number): Observable<any> {
    const deleteUrl = `${this.basicURL}Customers/${customerId}`;
    return this.http.delete(deleteUrl)
      .pipe(
        tap(() => {
          const updatedCustomers = this.customersSubject.getValue().filter(c => c.id !== customerId);
          this.customersSubject.next(updatedCustomers);
        }),
        catchError(error => {
          throw error;
        })
      );
  }

  createCustomerForLead(customer: ICustomer,leadId:number): Observable<ICustomer> {
    return this.http.post<ICustomer>(`${this.basicURL}Customers/Lead${leadId}`, customer);
  }

  getCustomers(): Observable<ICustomer[]> {
    return (this.customersSubject.asObservable());
  }
  getCustomerById(id: number): ICustomer | undefined {
    const customers = this.customersSubject.getValue();
    const c = customers.find(customer => customer.id === id);
    return c;
  }
  getById(id: number): Observable<any> {
    return this.http.get(`${this.basicURL}Customers/${id}`); // Use this.apiUrl
  }

  getLeadById(id: number): Observable<ILead> {
    return this.http.get<ILead>(`${this.basicURL}Leads/${id}`);
  }


  sendLink(customerId: number): string {
    /*some logic */
    return `${this.basicURL}/${customerId}/SendLink`;
  }

  createCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(`${this.basicURL}Customers`, customer);
  }

  updateCustomer(customerId: number | undefined, customer: ICustomer): Observable<ICustomer> {
    console.log("customerId",customerId);
    console.log("customer",customer);

    return this.http.put<ICustomer>(`${this.basicURL}Customers/${customerId}`, customer).pipe(
      tap(() => {
        const customers = this.customersSubject.getValue();
        const index =customers.findIndex(c => c.id === customerId);
        if (index !== -1) {
          customers[index] = customer;        
          this.customersSubject.next([...customers]);
          this.fetchCustomers().subscribe(); 
        }  
      })
    )
  }
}



