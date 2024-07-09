import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Injectable } from '@angular/core';
import { Document } from '../Models/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {


  readonly apiUrl = 'https://localhost:7055/api'
  private documentsSubject = new BehaviorSubject<Document[]>([]);
  documents$ = this.documentsSubject.asObservable();


  constructor(private http: HttpClient) {
    this.fetchDocumentsByCustomerId(4).subscribe();
  }


  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}CustomerTasksControllercs`);
  }


  getAllDocumentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.apiUrl}DocumentTypes`);
  }


  fetchDocumentsByCustomerId(customerId: number): Observable<Document[]> {
    return this.http.get<Document[]>(this.apiUrl + `/CustomerTasksControllercs/customerId/${customerId}`)
      .pipe(
        tap(customers => this.documentsSubject.next(customers)),
        catchError(error => {
          console.error('Error fetching customers:', error);
          throw error;
        })
      );
  }


  getDocumentsTypesById(customerId: number): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.apiUrl}/DocumentTypes/${customerId}`);
  }





}







