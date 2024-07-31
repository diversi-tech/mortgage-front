import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { loginService } from './login.service';
import { DocumentsListCustomerService } from './documents-list-customer.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = environment.apiURL + '/api/Dropbox'; // Replace with your server URL

  constructor(private http: HttpClient, private loginService: loginService, private documentService: DocumentsListCustomerService) { }

  uploadFiles(files: (File | null)[]): Observable<any> {
    const formData = new FormData();
    var id: number, id2:number;
    if (files)
      files.forEach((file, index) => {
        if (file) {
          id = files.findIndex(obj => obj?.name === file.name);
          if (id != -1) {
            if (this.loginService.isAdmin()) {
              this.documentService.documents$.subscribe(
                (data) => {
                  var obj=data.find(obj => obj?.id === id);
                  console.log(obj);
                  id2 = obj!.id2!;
                  if (id2 != -1) {
                    formData.append('files', file,`${id}_${id2}_${file.name}`);
                  }
                }
              );
            }
            else
              formData.append('files', file, `${id}_${file.name}`);
          }

        }
      });
    console.log("after foreach");

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
      formData.append('file', file, `${id}_${file.name}`); // שינוי השם של הקובץ כאן
    else if (file)
      formData.append('file', file, `${id}_${file.name}`); // שינוי השם של הקובץ כאן

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