import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  styles: [``],
  imports: [
    MaterialModule,
    CommonModule
  ],
  template: `
    <div  style="text-align: right;padding:20px">
      <h3 mat-dialog-title dir="rtl">{{ getTitle() }}</h3>
      <h5 mat-dialog-content>
        {{ getContent() }}
      </h5>
      <div mat-dialog-actions >
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
  ) { }

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
    } else if (this.data.lead) {
      return 'מחיקת ליד';
    }
    else if(this.data.document){
      return 'האם אתה בטוח רוצה להסיר?'
    }
    else {
      return 'מחיקת פריט';
    }
  }

  getContent(): string {
    console.log(this.data.documentType);

    var question = "בטוח שאתה רוצה למחוק את  ";
    if (this.data.customer) {
      return question + `${this.data.customer.first_Name}?`;
    } else if (this.data.documentType) {
      return question + ` ${this.data.documentType.document_Name}?`;
    } else if (this.data.lead) {
      return question + `${this.data.lead.first_Name}?`;
    }  else if(this.data.document){
      return question+`${this.data.document.name}`
    }
     else {
      return question + " הפריט הזה?";
    }
  }
}
