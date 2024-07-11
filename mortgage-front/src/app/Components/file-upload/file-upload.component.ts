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
  selectedFile?: File;
  uploadProgress: number = 0;
  uploadedFileName? = "";
  // message = "File uploaded successfully!";
  // showMsg:boolean=false;
  constructor(private uploadService: UploadService,private _snackBar: MatSnackBar) { }
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.uploadedFileName = this.selectedFile?.name;

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, // Duration in milliseconds for how long the snackbar should be visible
    });
  }
 
  onUpload(): void {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile, "1").subscribe(
        (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else if (event.status !== 'error'||event.status=='ok') {
            console.log('File uploaded successfully:', event);
            this.uploadProgress = 0;
            this.selectedFile = undefined;
            this.uploadedFileName = undefined;
            this.openSnackBar('המסמך הועלה בהצלחה!', 'Close');
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
}
