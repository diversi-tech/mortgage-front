import { Component } from '@angular/core';
import { UploadService } from '../../shared/Services/fileService';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  selectedFiles: File[] = [];
  uploadProgress: number = 0;
  uploadedFiles: File[] = [];
  fileId: string = '';
/*An example component for using the service of uploading and downloading files - should be deleted */
  constructor(private uploadService: UploadService, private _snackBar: MatSnackBar) { }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onUpload(): void {
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      // this.uploadService.uploadFiles(this.selectedFiles).subscribe(
      //   (event: any) => {
      //     if (event.status === 'progress') {
      //       this.uploadProgress = event.message;
      //     } else if (!event.status) {
      //       this.uploadProgress = 0;
      //       this.selectedFiles = [];
      //       this.uploadedFiles = event.files;
      //       this.openSnackBar('המסמכים הועלו בהצלחה!', 'Close');
      //     }
      //   },
      //   (error: any) => {
      //     this.openSnackBar('ארעה שגיאה בעת ההעלאה :(', 'Close');
      //     console.error('Upload error:', error);
      //     this.uploadProgress = 0;
      //   }
      // );
    }
  }
 

  download() {
    if (!this.fileId) {
      alert('Please enter a file ID');
      return;
    }
  
    this.uploadService.downloadFile(this.fileId).subscribe(
      (response) => {
        const contentDisposition = response.headers.get('Content-Disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition!);
        this.saveFile(response.body!, fileName);
      },
      (error) => alert('Error downloading file')
    );
  }
  
  private getFileNameFromContentDisposition(contentDisposition: string): string {
    const matches = /filename="(.+?)"/.exec(contentDisposition);
    return matches && matches[1] ? matches[1] : 'unknown';
  }
  
  private saveFile(blob: Blob, fileName: string) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}