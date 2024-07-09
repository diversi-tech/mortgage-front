import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Customer } from "../Models/Customer";
import { Lead } from "../Models/Lead";
import { DocumentType } from '../Models/DocumentTypes.Model';

@Injectable()
export class DocumentTypeService {
  readonly basicURL = "https://localhost:7055/api/";
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
}