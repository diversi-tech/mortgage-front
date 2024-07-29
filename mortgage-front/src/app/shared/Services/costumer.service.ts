import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { ICustomer } from "../Models/Customer";
import { ILead } from "../Models/Lead";
import { environment } from "../../../environments/environment";

@Injectable()
export class customerService {
  readonly basicURL = "https://localhost:7055/api/";
  private customersSubject = new BehaviorSubject<ICustomer[]>([]);
  customers$ = this.customersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCustomers().subscribe(); // אתחול לקוחות בהפעלת השירות
  }

  fetchCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.basicURL}Customers`)
      .pipe(
        tap(customers => this.customersSubject.next(customers)),
        catchError(error => {
          // console.error('Error fetching customers:', error);
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
          // console.error('Error deleting customer:', error);
          throw error;
        })
      );
  }

  getCustomers(): Observable<ICustomer[]> {
    return (this.customersSubject.asObservable());
  }
  getCustomerById(id: number): ICustomer | undefined {
    const customers = this.customersSubject.getValue();
    const c=customers.find(customer => customer.id === id);
    return c;
  }
  getById(id: number): Observable<any>{
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

  updateCustomer(customerId: number|undefined, customer: ICustomer|undefined): Observable<ICustomer> {
    return this.http.put<ICustomer>(`${this.basicURL}Customers/${customerId}`,customer);
  }
}



