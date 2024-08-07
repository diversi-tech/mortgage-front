import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { loginService } from './login.service';
import { DocumentsListCustomerService } from './documents-list-customer.service';
import { IDocument } from '../Models/document';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = environment.apiURL + '/api/Dropbox'; // Replace with your server URL

  constructor(private http: HttpClient, private loginService: loginService, private documentService: DocumentsListCustomerService) { }

  uploadFiles(files: (IDocument | null)[]): Observable<any> {
    const formData = new FormData();
    var id: number, id2: number;
    if (files)
      files.forEach((file, index) => {
        if (file) {
          id = file.id;
          id2 = file.id2;
          if (this.loginService.isAdmin())
            formData.append('files', file.adminFile!, `${id}_${id2}_${file.document_path2}`);
          else
            formData.append('files', file.customerFile!, `${id}_${file.document_path}`);
        }
      }
      );
    const uploadReq = new HttpRequest('POST', `${this.baseUrl}/uploadfiles`, formData, {
      reportProgress: true,
    });

    return this.http.request(uploadReq).pipe(
      map(event => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        } else if (event instanceof HttpResponse) {
          return event.body;
        }
        return `Unhandled event: ${event.type}`;
      }),
      catchError(error => {
        console.error('Upload error:', error);
        return throwError(error);
      })
    );
  }


  uploadFile(file: File | null, id: string): Observable<any> {
    const formData = new FormData();
    if (file && this.loginService.isAdmin())
      formData.append('file', file, `${id}_${file.name}`);
    else if (file)
      formData.append('file', file, `${id}_${file.name}`);

    const uploadReq = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
    });

    return this.http.request(uploadReq).pipe(
      map(event => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        } else if (event.type === HttpEventType.Response) {
          return event.body;
        }
        return `Unhandled event: ${event.type}`;
      })
    );
  }

  downloadFile(id: string): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.baseUrl}/download/${id}`, {
      observe: 'response',
      responseType: 'blob'
    });
  }
}