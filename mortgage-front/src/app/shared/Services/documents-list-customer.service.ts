import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { IDocument } from '../Models/document';
import { IDocumentType, TransactionType } from '../Models/DocumentTypes.Model';
import { environment } from '../../../environments/environment';
import { ICustomer } from '../Models/Customer';
import { customerService } from './costumer.service';
import { loginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {
  readonly apiUrl = environment.apiURL + '/api';
  customerId!: number;
  private documentsSubject = new BehaviorSubject<IDocument[]>([]);
  documents$ = this.documentsSubject.asObservable();

  private selectedDocumentsSubject = new BehaviorSubject<(IDocument)[]>([]);
  selectedDocuments$ = this.selectedDocumentsSubject.asObservable();

  private _selectedDocuments: (IDocument)[] = [];

  constructor(private http: HttpClient,
    private customerService: customerService,
    private loginService: loginService) { }

  get selectedDocuments(): (IDocument)[] {
    return this._selectedDocuments;
  }

  set selectedDocuments(documents: (IDocument)[]) {
    this._selectedDocuments = documents;
    this.selectedDocumentsSubject.next(documents);
  }

  getDocumentsTypesById(customerId: number): Observable<IDocumentType[]> {
    return this.http.get<IDocumentType[]>(`${this.apiUrl}/DocumentTypes/${customerId}`);
  }
  getDocumentById(DocId: number) {
    return this.http.get<IDocument>(`${this.apiUrl}/CustomerTasksControllercs/${DocId}`);
  }
  addDocument(document: IDocument): Observable<IDocument> {
    return this.http.post<IDocument>(`${this.apiUrl}/CustomerTasksControllercs`, document);
  }

  getAllDocuments(): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(`${this.apiUrl}/CustomerTasksControllercs`);
  }

  getAllDocumentType(): Observable<IDocumentType[]> {
    return this.http.get<IDocumentType[]>(`${this.apiUrl}/DocumentTypes`);
  }

  fetchDocumentsByCustomerId(customerId: number): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(`${this.apiUrl}/CustomerTasksControllercs/customerId/${customerId}`)
      .pipe(
        tap(documents => this.documentsSubject.next(documents)),
        catchError(error => {
          console.error('Error fetching documents:', error);
          throw error;
        })
      );
  }
  updateMultipleDocuments(documents: IDocument[]): Observable<any> {
    return this.http.put<any>(this.apiUrl + `/CustomerTasksControllercs`, documents)
      .pipe(
        catchError(error => {
          console.error('שגיאה בעדכון מסמכים בשרת:', error);
          return throwError('משהו השתבש בעדכון המסמכים. נסה שוב מאוחר יותר.');
        })
      );
  }
  // fetchDocumentsTypesByCustomerId(customerId: number): Observable<IDocumentType[]> {
  //   return this.http.get<IDocumentType[]>(`${this.apiUrl}/DocumentTypes/${customerId}`);
  // }
  deleteDocument(docId: number) {
    return this.http.delete(`${this.apiUrl}/CustomerTasksControllercs/${docId}`);
  }
  updateDocument(docId: number, documentData: any) {
    return this.http.put(`${this.apiUrl}/CustomerTasksControllercs/${docId}`, documentData);
  }
  createDocument(documentData: any) {
    return this.http.post(`${this.apiUrl}/CustomerTasksControllercs`, documentData);
  }
  getCustomerByDocumentId(doc: IDocument): ICustomer | undefined {
    console.log(doc);
    var customer = this.customerService.getCustomerById(doc?.customer_Id || 0);
    console.log("customer=" + customer);

    return customer;
  }

  hasNotSavedDoc: boolean = false;
  hasPendingDocuments: boolean = false;
  checkPendingDocuments() {
    this.fetchDocumentsByCustomerId(this.loginService.GetCurrentUser().customerId).subscribe(
      (documents) => {
        this.documentsSubject.next(documents);
        this.documents$.subscribe(
          (documents) => {
            this.hasNotSavedDoc = this.selectedDocuments.filter(file => file != null && file != undefined).length > 0;
            this.hasPendingDocuments = documents.some(document => document.status === 0);
          },
          (error) => {
            console.error('שגיאה בטעינת ');
          }
        )
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    )

  }
}
