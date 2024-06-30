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
    <div >
      <h1 mat-dialog-title dir="rtl">מחיקת לקוח</h1>
      <div mat-dialog-content>?  בטוח שאתה רוצה למחוק את הלקוח {{data.customer.first_Name}}</div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()" >לא</button>
        <button mat-button color="primary" (click)="onYesClick()" cdkFocusInitial>כן</button>
      </div>
    </div>
  `
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {     
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
