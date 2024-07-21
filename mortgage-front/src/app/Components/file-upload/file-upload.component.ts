import { Component } from '@angular/core';
import { UploadService } from '../../Services/fileUploadService';
import { MaterialModule } from '../../material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class UploadComponent {
  selectedFiles: File[] = [];
  uploadProgress: number = 0;
  uploadedFiles: File[] = [];

  constructor(private uploadService: UploadService, private _snackBar: MatSnackBar) { }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any): void {
    console.log("in onFileSelected");
    console.log(this.uploadedFiles);
    this.selectedFiles = Array.from(event.target.files);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onUpload(): void {
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      this.uploadService.uploadFiles(this.selectedFiles,"1").subscribe(
        (event: any) => {          
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else if (!event.status) {
            console.log('Files uploaded successfully:', event.files);
            this.uploadProgress = 0;
            this.selectedFiles = [];
            this.uploadedFiles = event.files;
            this.openSnackBar('המסמכים הועלו בהצלחה!', 'Close');
          }
        },
        (error: any) => {
          this.openSnackBar('ארעה שגיאה בעת ההעלאה :(', 'Close');
          console.error('Upload error:', error);
          this.uploadProgress = 0;
        }
      );
    }
  }
}

  // onDownload(fileName: string): void {
  //   this.uploadService.downloadFile(fileName).subscribe(blob => {
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = fileName; // Set the file name for download
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   });
  // }
