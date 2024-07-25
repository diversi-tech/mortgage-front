import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  
  //private customerURL = `${environment.apiURL}/api`; 
  private apiUrl = environment.apiURL+'/api/Customers'; // Define your API URL
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl); // Use this.apiUrl
  }
  
  getById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`); // Use this.apiUrl
  }

  update(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }


  
}

