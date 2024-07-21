
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Customer } from "../Models/Customer";
import { Lead } from "../Models/Lead";

@Injectable()
export class customerService {
  readonly basicURL = "https://localhost:7055/api/";
  private customersSubject = new BehaviorSubject<Customer[]>([]);
  customers$ = this.customersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCustomers().subscribe(); // אתחול לקוחות בהפעלת השירות
  }

  fetchCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.basicURL}Customers`)
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

  getCustomers(): Observable<Customer[]> {
    return (this.customersSubject.asObservable());
  }
  getCustomerById(id: number): Customer | undefined {
    const customers = this.customersSubject.getValue();
    const c=customers.find(customer => customer.id === id);
    console.log(customers);
    return c;
  }
  getLeadById(id: number): Observable<Lead> {
    return this.http.get<Lead>(`${this.basicURL}Leads/${id}`);
  }

  sendLink(customerId: number): string {
    /*some logic */
    return `${this.basicURL}/${customerId}/SendLink`;
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.basicURL}Customers`, customer);
  }

  updateCustomer(customerId: number|undefined, customer: Customer|undefined): Observable<Customer> {
    return this.http.put<Customer>(`${this.basicURL}Customers/${customerId}`,customer);
  }
}



