import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentType } from '../Models/DocumentTypes.Model';


@Injectable({
  providedIn: 'root'
})

export class DocumentTypeService {
  apiUrl = 'https://localhost:7055/api'; // Define your API base URL here

  constructor(private http: HttpClient) { } // Inject HttpClient in the constructor

  addDocumentType(docType: DocumentType):Observable<any> {
    console.log('addDocumentType')
    return this.http.post(`${this.apiUrl}/DocumentTypes`, docType);
}
editDocumentType(docType: DocumentType,id:number) :Observable<void>{
  console.log('editDocumentType'); 
  return this.http.put<void>(`${this.apiUrl}/DocumentTypes/${id}`, docType);
}


  getDocTypeById(id:number):Observable<DocumentType> {
    return this.http.get(`${this.apiUrl}/DocumentTypes/${id}`)
  }
}
