import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { DocumentType } from '../Models/DocumentTypes.Model';
import { environment } from "../../../environments/environment";



@Injectable()
export class DocumentTypeService {
  readonly basicURL = environment.apiURL + "/api/";
  private documentSubject = new BehaviorSubject<DocumentType[]>([]);
  documentTypes$ = this.documentSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCustomers().subscribe(); // אתחול לקוחות בהפעלת השירות
  }

  fetchCustomers(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.basicURL}DocumentTypes`)
      .pipe(
        tap(documentTypes => this.documentSubject.next(documentTypes)),
        catchError(error => {
          // console.error('Error fetching customers:', error);
          throw error;
        })
      );
  }

  deleteDocumentType(DocumentTypeId: number): Observable<any> {
    const deleteUrl = `${this.basicURL}DocumentTypes/${DocumentTypeId}`;
    return this.http.delete(deleteUrl)
      .pipe(
        tap(() => {
          const updatedDocumentType = this.documentSubject.getValue().filter(c => c.id !== DocumentTypeId);
          this.documentSubject.next(updatedDocumentType);
        }),
        catchError(error => {
          // console.error('Error deleting customer:', error);
          throw error;
        })
      );
  }

  addDocumentType(docType: DocumentType):Observable<any> {
    console.log('addDocumentType')
    debugger
    return this.http.post(`${this.basicURL}DocumentTypes`, docType);
}

editDocumentType(docType: DocumentType,id:number) :Observable<void>{
  console.log('editDocumentType'); 
  return this.http.put<void>(`${this.basicURL}DocumentTypes/${id}`, docType);
}


  getDocTypeById(id:number):Observable<DocumentType> {
    return this.http.get(`${this.basicURL}DocumentTypes/${id}`)
  }
}
