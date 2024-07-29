import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Injectable } from '@angular/core';
import { Document } from '../Models/document';
import { DocumentType, TransactionType } from '../Models/DocumentTypes.Model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {
  readonly apiUrl = environment.apiURL+'/api';
  customerId:number=7;
  private documentsSubject = new BehaviorSubject<Document[]>([]);
  documents$ = this.documentsSubject.asObservable();
  
  private selectedDocumentsSubject = new BehaviorSubject<(File | null)[]>([]);
  selectedDocuments$ = this.selectedDocumentsSubject.asObservable();

  private _selectedDocuments: (File | null)[] = [];

  constructor(private http: HttpClient) {
    this.fetchDocumentsByCustomerId(7).subscribe();
  }

  get selectedDocuments(): (File | null)[] {
    return this._selectedDocuments;
  }

  set selectedDocuments(documents: (File | null)[]) {
    this._selectedDocuments = documents;
    this.selectedDocumentsSubject.next(documents);
  }

  getDocumentsTypesById(customerId: number): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.apiUrl}/DocumentTypes/${customerId}`);
  }
  
  addDocument(document : Document):Observable<Document>{
    return this.http.post<Document>(`${this.apiUrl}/CustomerTasksControllercs`, document);
  }

  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/CustomerTasksControllercs`);
  }

  getAllDocumentType(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.apiUrl}/DocumentTypes`);
  }

  fetchDocumentsByCustomerId(customerId: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/CustomerTasksControllercs/customerId/${customerId}`)
      .pipe(
        tap(documents => this.documentsSubject.next(documents)),
        catchError(error => {
          console.error('Error fetching documents:', error);
          throw error;
        })
      );
  }

  fetchDocumentsTypesById(customerId: number): Observable<DocumentType> {
    return this.http.get<DocumentType>(`${this.apiUrl}/DocumentTypes/${customerId}`);
  }

  addFile(file: File | null, index: number) {
    const documents = [...this.selectedDocuments];
    documents[index] = file;
    this.selectedDocuments = documents;
  }
}
