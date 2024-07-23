import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { ICustomer } from "../Models/Customer";
import { ILead } from "../Models/Lead";
import { IDocumentType } from '../Models/DocumentTypes';

//my
// @Injectable({
//   providedIn: 'root'
// })

// export class DocumentTypeService {
//   apiUrl = 'https://localhost:7055/api'; // Define your API base URL here

//   constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

//   addDocumentType(docType: DocumentType):Observable<any> {
//     console.log('addDocumentType')
//     return this.http.post(`${this.apiUrl}/DocumentTypes`, docType);
// }
// editDocumentType(docType: DocumentType,id:number) :Observable<void>{
//   console.log('editDocumentType'); 
//   return this.http.put<void>(`${this.apiUrl}/DocumentTypes/${id}`, docType);
// }


//   getDocTypeById(id:number):Observable<DocumentType> {
//     return this.http.get(`${this.apiUrl}/DocumentTypes/${id}`)
//   }
// }


@Injectable()
export class DocumentTypeService {
  readonly basicURL = "https://localhost:7055/api/";
  private documentSubject = new BehaviorSubject<IDocumentType[]>([]);
  documentTypes$ = this.documentSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCustomers().subscribe(); // אתחול לקוחות בהפעלת השירות
  }

  fetchCustomers(): Observable<IDocumentType[]> {
    return this.http.get<IDocumentType[]>(`${this.basicURL}DocumentTypes`)
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

  addDocumentType(docType: IDocumentType):Observable<any> {
    console.log('addDocumentType')
    return this.http.post(`${this.basicURL}DocumentTypes`, docType);
}
editDocumentType(docType: IDocumentType,id:number) :Observable<void>{
  console.log('editDocumentType'); 
  return this.http.put<void>(`${this.basicURL}DocumentTypes/${id}`, docType);
}


  getDocTypeById(id:number):Observable<any> {
    return this.http.get(`${this.basicURL}DocumentTypes/${id}`)
  }
}
