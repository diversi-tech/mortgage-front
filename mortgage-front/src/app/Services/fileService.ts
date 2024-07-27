import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'https://localhost:7055/api/Dropbox'; // Replace with your server URL

  constructor(private http: HttpClient) { }

  uploadFiles(files: (File | null)[]): Observable<any> {
    const formData = new FormData();
    var id=0;
    if (files)
      files.forEach((file, index) => {
        if (file)
        {
          id= files.findIndex(obj => obj?.name === file.name);
          if(id!=-1)
          formData.append('files', file, `${id}_${file.name}`);
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
    if (file)
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