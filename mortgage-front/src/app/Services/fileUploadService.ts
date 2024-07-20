import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'https://localhost:7055/api/dropbox'; // Replace with your server URL

  constructor(private http: HttpClient) {}
  uploadFiles(files: File[], id: string): Observable<any> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append('files', file, `${id}_${file.name}`); // Adjusted file name with ID prefix
    });

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
      })
    );
  }
  
  uploadFile(file: File, id: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, `${id}_${file.name}`); // שינוי השם של הקובץ כאן

    const uploadReq = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
    });

    return this.http.request(uploadReq).pipe(
      map(event => {
        if (event.type === HttpEventType.UploadProgress&&event.total) {
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        } else if (event.type === HttpEventType.Response) {
          return event.body;
        }
        return `Unhandled event: ${event.type}`;
      })
    );
  }
  // downloadFile(fileName: string): Observable<Blob> {
  //   return this.http.get(`${this.baseUrl}/download/${fileName}`, {
  //     responseType: 'blob'
  //   });
  // }
}