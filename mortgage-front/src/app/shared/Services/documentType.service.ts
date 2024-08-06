import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { IDocumentType } from '../Models/DocumentTypes.Model';
import { environment } from "../../../environments/environment";
import { loginService } from "./login.service";



@Injectable()
export class DocumentTypeService{
  readonly basicURL = environment.apiURL + "/api/";
  private documentSubject = new BehaviorSubject<IDocumentType[]>([]);
  documentTypes$ = this.documentSubject.asObservable();

  constructor(private http: HttpClient,private loginService:loginService) { 
    debugger
    if(this.loginService.isAdmin())
    this.fetchDocumentTypes().subscribe()
  

   }


  fetchDocumentTypes(): Observable<IDocumentType[]> {
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
    return this.http.post(`${this.basicURL}DocumentTypes`, docType);
}

editDocumentType(docType: IDocumentType, id: number): Observable<void> {
  return this.http.put<void>(`${this.basicURL}DocumentTypes/${id}`, docType).pipe(
    tap(() => {
      const documentTypes = this.documentSubject.getValue();
      const index = documentTypes.findIndex(dt => dt.id === id);
      if (index !== -1) {
        documentTypes[index] = docType;
        this.documentSubject.next([...documentTypes]);
      }
    }),
    catchError(error => {
      console.error('Error updating document type:', error);
      throw error;
    })
  );
}


  getDocTypeById(id:number):Observable<any> {
    return this.http.get(`${this.basicURL}DocumentTypes/${id}`)
  }

  getDocsByTransactionType(id:number):Observable<IDocumentType[]> {

    return this.http.get<IDocumentType[]>(`${this.basicURL}DocumentTypes/TypesDocument/${id}`)

  }
}
