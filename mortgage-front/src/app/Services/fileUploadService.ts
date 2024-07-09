import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'https://localhost:7055/api/dropbox'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File, id: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, `${id}_${file.name}`); // Adjusted file name with ID prefix

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

  // downloadFile(fileName: string): Observable<Blob> {
  //   return this.http.get(`${this.baseUrl}/download/${fileName}`, {
  //     responseType: 'blob'
  //   });
  // }
}




// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { map } from 'rxjs/operators';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UploadService {
// //   private baseUrl = 'https://localhost:7055/api/dropbox'; // שים כאן את ה-URL של השרת שלך

// //   constructor(private http: HttpClient) {}

// //   uploadFile(file: File,id:number): Observable<any> {
// //     const formData = new FormData();
// //     formData.append('file', file);

// //     return this.http.post(`${this.baseUrl}/upload`, formData, {
// //       reportProgress: true,
// //       observe: 'events'
// //     }).pipe(
// //       map(event => {
// //         switch (event.type) {
// //           case HttpEventType.UploadProgress:
// //             var progress=null;
// //             if(event&&event.total)
// //             progress = Math.round(100 * event.loaded / event.total);
// //             return { status: 'progress', message: progress };

// //           case HttpEventType.Response:
// //             return event.body;
          
// //           default:
// //             return `Unhandled event: ${event.type}`;
// //         }
// //       })
// //     );
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
// import { map, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UploadService {

//   private baseUrl = 'https://localhost:7055/api/dropbox'; // או בכתובת השרת שלך

//   constructor(private http: HttpClient) {}

//   uploadFile(file: File, id: string): Observable<any> {
//     const formData = new FormData();
//     formData.append('file', file, `${id}_${file.name}`); // שינוי השם של הקובץ כאן

//     const uploadReq = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
//       reportProgress: true,
//     });

//     return this.http.request(uploadReq).pipe(
//       map(event => {
//         if (event.type === HttpEventType.UploadProgress&&event.total) {
//           const progress = Math.round(100 * event.loaded / event.total);
//           return { status: 'progress', message: progress };
//         } else if (event.type === HttpEventType.Response) {
//           return event.body;
//         }
//         return `Unhandled event: ${event.type}`;
//       })
//     );
//   }
// }