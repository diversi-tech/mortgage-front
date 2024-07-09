// import { Component, Inject } from '@angular/core';
// import { MaterialModule } from '../../material/material.module';
// import { CommonModule } from '@angular/common';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentType } from '../../Models/DocumentTypes.Model';
// @Component({
//   selector: 'confirm-dialog',
//   standalone: true,
//   styles: [``],
//   imports: [MaterialModule, CommonModule],
//   template: `
//     <div style="padding: 20px;" >
//       <h1 mat-dialog-title dir="rtl">מחיקת לקוח</h1>
//       <div mat-dialog-content>?  בטוח שאתה רוצה למחוק את הלקוח {{data.customer.first_Name}}</div>
//       <div mat-dialog-actions>
//         <button mat-button (click)="onNoClick()" >לא</button>
//         <button mat-button color="primary" (click)="onYesClick()" cdkFocusInitial>כן</button>
//       </div>
//     </div>
//   `
// })
// export class ConfirmDialogComponent {
//   constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {     
//   }

//   onNoClick(): void {
//     this.dialogRef.close(false);
//   }

//   onYesClick(): void {
//     this.dialogRef.close(true);
//   }
// }
import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  styles: [``],
  imports: [MaterialModule, CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1 mat-dialog-title dir="rtl">{{ getTitle() }}</h1>
      <div mat-dialog-content>
        {{ getContent() }}
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">לא</button>
        <button mat-button color="primary" (click)="onYesClick()" cdkFocusInitial>כן</button>
      </div>
    </div>
  `
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  getTitle(): string {
    if (this.data.customer) {
      return 'מחיקת לקוח';
    } else if (this.data.DocumentType) {
      return 'מחיקת מסמך';
    } else {
      return 'מחיקת פריט';
    }
  }

  getContent(): string {
    if (this.data.customer) {
      return `?  בטוח שאתה רוצה למחוק את הלקוח ${this.data.customer.first_Name}`;
    } else if (this.data.DocumentType) {
      return `?  בטוח שאתה רוצה למחוק את המסמך ${this.data.documentType.name}`;
    } else {
      return '?  בטוח שאתה רוצה למחוק את הפריט הזה';
    }
  }
}
