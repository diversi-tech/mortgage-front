import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  
  //private customerURL = `${environment.apiURL}/api`; 
  private apiUrl = 'https://localhost:7055/api/Customers'; // Define your API URL
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl); // Use this.apiUrl
  }
  
  getById(id: number): Observable<any>{
    console.log("hi");
    return this.http.get(`${this.apiUrl}/${id}`); // Use this.apiUrl
  }

  update(id: number, updatedData: any): Observable<any> {
    console.log("Updating customer with ID:", id);
    console.log("Data to be sent:", updatedData);
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }


  
}

