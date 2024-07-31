import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IDocumentType,TransactionType } from '../Models/DocumentTypes.Model';
import { DocumentTypeService } from '../Services/documentType.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'document-type-details',
  templateUrl: './document-type-details.component.html',
  styleUrl: './document-type-details.component.css'
})


export class DocumentTypeDetailsComponent implements OnInit {
  docTypeId: number | null = null;
  documentTypeForm: FormGroup;
  transactionTypes = Object.values(TransactionType).filter(key => isNaN(Number(key)));
  docType!: IDocumentType

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private documentTypeService: DocumentTypeService, private snackBar: MatSnackBar) {
    this.documentTypeForm = this.fb.group({
      required: [true],
      transaction_Type: ['', Validators.required],
      document_Name: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // קבל את ה-ID מהנתיב
    this.route.paramMap.subscribe(params => {
      this.docTypeId = Number(params.get('id'));
      if(isNaN(this.docTypeId)==false){//check if the type of the id is number
        this.setFormValues(this.docTypeId)
      }
    });
  }


  setFormValues(id: number): void {
    if (this.docTypeId != -1) {
      this.documentTypeService.getDocTypeById(id).subscribe(docTypeById => {
        if(docTypeById!=null){  //check if the id not exist in the DB
          this.docType = docTypeById
          this.docType.transaction_Type = TransactionType[this.docType.transaction_Type as number] as unknown as TransactionType
          this.documentTypeForm.patchValue(this.docType);
        }
      });
    }
  }


  onSubmit(): void {
    if (this.documentTypeForm.valid) {
      const formValues = this.documentTypeForm.value;

      const documentTypeObject: IDocumentType = {
        document_Name: formValues.document_Name,
        required: formValues.required as boolean,
        transaction_Type: TransactionType[formValues.transaction_Type as unknown as keyof typeof TransactionType]
      }


      if (this.docTypeId != -1) {
        this.documentTypeService.editDocumentType(documentTypeObject, this.docTypeId!).subscribe(() => {
          this.snackBar.open('סוג המסמך עודכן בהצלחה!!', 'Close', {
          });
          this.clearFormFields();

        })
      }
      else {
        this.documentTypeService.addDocumentType(documentTypeObject).subscribe(() => {
          this.snackBar.open('סוג המסמך נוסף בהצלחה!!', 'Close', {
          });
          this.clearFormFields();
        });
      }
      this.router.navigate(['admin/document-type-list']);
    }
  }


  cancel() {
    this.router.navigate(['admin/document-type-list']);
  }

  clearFormFields(): void {
    const transactionTypeValue = this.documentTypeForm.get('transaction_Type')?.value;
    console.log(transactionTypeValue);

    this.documentTypeForm.reset({
      transaction_Type: transactionTypeValue
    });
  }
}
