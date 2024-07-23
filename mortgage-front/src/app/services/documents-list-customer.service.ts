import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Injectable } from '@angular/core';
import { IDocument } from '../Models/Document';


@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {


  readonly apiUrl = 'https://localhost:7055/api'
  private documentsSubject = new BehaviorSubject<IDocument[]>([]);
  documents$ = this.documentsSubject.asObservable();


  constructor(private http: HttpClient) {
    this.fetchDocumentsByCustomerId(4).subscribe();
  }


  getAllDocuments(): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(`${this.apiUrl}CustomerTasksControllercs`);
  }


  getAllDocumentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.apiUrl}DocumentTypes`);
  }


  fetchDocumentsByCustomerId(customerId: number): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(this.apiUrl + `/CustomerTasksControllercs/customerId/${customerId}`)
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







