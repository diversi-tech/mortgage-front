import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { IDocument } from '../Models/Document';
import { IDocumentType } from '../Models/DocumentTypes';

@Injectable({
  providedIn: 'root'
})
export class DocumentsListCustomerService {

  private apiUrl = 'https://localhost:7055/api/'

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(`${this.apiUrl}CustomerTasksControllercs`);
  }
   getAllDocumentType():Observable<IDocumentType[]> {
    return this.http.get<IDocumentType[]>(`${this.apiUrl}DocumentTypes`);
    }
}