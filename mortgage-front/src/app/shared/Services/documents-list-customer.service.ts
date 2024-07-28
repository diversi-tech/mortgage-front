import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Injectable } from '@angular/core';
import { IDocument } from '../Models/Document';
import { IDocumentType, TransactionType } from '../Models/DocumentTypes.Model';


@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {


  readonly apiUrl = 'https://localhost:7055/api'
  private documentsSubject = new BehaviorSubject<IDocument[]>([]);
  documents$ = this.documentsSubject.asObservable();
  customerId: number = 4;
  selectedDocuments: (File | null)[] = [];
  // isSelected:boolean[]=[];

  constructor(private http: HttpClient) {
    this.fetchDocumentsByCustomerId(this.customerId).subscribe();
  }


  getAllDocuments(): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(`${this.apiUrl}/CustomerTasksControllercs`);
  }


  getAllDocumentType(): Observable<IDocumentType[]> {
    return this.http.get<IDocumentType[]>(`${this.apiUrl}/DocumentTypes`);
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


  fetchDocumentsTypesById(customerId: number): Observable<IDocumentType> {
    return this.http.get<IDocumentType>(`${this.apiUrl}/DocumentTypes/${customerId}`);
  }


  addFile(file: File | null, index: number) {
    this.selectedDocuments[index] = file;
  }

}