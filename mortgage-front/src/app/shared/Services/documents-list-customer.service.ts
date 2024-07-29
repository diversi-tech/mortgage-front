import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { Document } from '../Models/document';
import { DocumentType, TransactionType } from '../Models/DocumentTypes.Model';
import { environment } from '../../../environments/environment';
import { Customer } from '../Models/Customer';
import { customerService } from './costumer.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {
  readonly apiUrl = environment.apiURL + '/api';
  customerId!: number;
  private documentsSubject = new BehaviorSubject<Document[]>([]);
  documents$ = this.documentsSubject.asObservable();

  private selectedDocumentsSubject = new BehaviorSubject<(File | null)[]>([]);
  selectedDocuments$ = this.selectedDocumentsSubject.asObservable();

  private _selectedDocuments: (File | null)[] = [];

  constructor(private http: HttpClient,private customerService:customerService) {
    // this.fetchDocumentsByCustomerId(7).subscribe();
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
  getDocumentById(DocId: number) {
    return this.http.get<Document>(`${this.apiUrl}/CustomerTasksControllercs/${DocId}`);
  }
  addDocument(document: Document): Observable<Document> {
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
  updateMultipleDocuments(documents: Document[]): Observable<any> {
    return this.http.put<any>(this.apiUrl + `/CustomerTasksControllercs`, documents)
      .pipe(
        catchError(error => {
          console.error('שגיאה בעדכון מסמכים בשרת:', error);
          return throwError('משהו השתבש בעדכון המסמכים. נסה שוב מאוחר יותר.');
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
  deleteDocument(docId: number) {
    return this.http.delete(`${this.apiUrl}/CustomerTasksControllercs/${docId}`);
  }
  updateDocument(docId: number, documentData: any) {
    return this.http.put(`${this.apiUrl}/CustomerTasksControllercs/${docId}`, documentData);
  }
  createDocument(documentData: any) {
    return this.http.post(`${this.apiUrl}/CustomerTasksControllercs`, documentData);
  }
  getCustomerByDocumentId(doc: Document):Customer|undefined {
    // var doc:Document|undefined;
    // this.documents$.subscribe(
    //   (data: Document[]) => {
    //     doc = data.find((doc: Document) => doc.customer_Id == id);
    //     // return customer;
    //     console.log("doc="+doc);
        
    //   }
    // );
    console.log(doc);
    
    var customer=this.customerService.getCustomerById(doc?.customer_Id||0);
    console.log("customer="+customer);
    
    return customer;
  }
}
