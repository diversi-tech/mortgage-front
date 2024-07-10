import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Document } from '../Models/document';
import { DocumentType } from '../Models/DocumentTypes.Model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {

  //private apiUrl = 'https://localhost:7055/api/'
  private apiUrl=  `${environment.apiURL}/api/`;
  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}CustomerTasksControllercs`);
  }
   getAllDocumentType():Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.apiUrl}DocumentTypes`);
    }
}