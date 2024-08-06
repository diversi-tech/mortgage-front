import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'confirm-dialog',
  styleUrl: "confirm-dialog.component.scss",
  templateUrl: "confirm-dialog.component.html"
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private loginService: loginService
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
    else if (this.data.document) {
      return 'האם אתה בטוח רוצה להסיר?'
    }
    else if (this.data.notification) {
      return 'מחיקת הודעה'
    }
    return 'מחיקת פריט';
  }

  getContent(): string {

    var question = "?בטוח שאתה רוצה למחוק את  ";
    if (this.data.customer) {
      return question + `${this.data.customer.first_Name}`;
    } else if (this.data.documentType) {
      return question + ` ${this.data.documentType.document_Name}`;
    } else if (this.data.lead) {
      return question + `${this.data.lead.first_Name}`;
    } else if (this.data.document1 && this.loginService.isAdmin()) {
      return question + `${this.data.document1.document_path2}`
    } else if (this.data.document1) {
      return question + `${this.data.document1.document_path}`
    }
    else if (this.data.notification) {
      return question + `ההודעה הזו`
    }
    else {
      return question + " הפריט הזה";
    }
  }
}
