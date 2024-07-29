import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDocumentType, TransactionType } from '../../shared/Models/DocumentTypes.Model';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { IDocument } from '../../shared/Models/Document';
import { loginService } from '../../shared/Services/login.service';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  taskForm!: FormGroup;
  documentTypes: IDocumentType[] = [];
  taskId: number = -1; // -1 indicates creating a new task
  transactionTypeString: String = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private documentsService: DocumentsListCustomerService,
    private loginService: loginService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.paramMap.subscribe(params => {
      this.taskId = +params.get('id')!;
      if (this.taskId !== -1) {
        this.loadTaskData(this.taskId);
      }
      else if (typeof window && window.sessionStorage != undefined)
        window.sessionStorage.setItem('customerId', this.documentsService.customerId.toString())
    });
    this.loadDocumentTypes();
  }
  changeTransacTypeToString(index: number | undefined): String {
    if (index)
      this.transactionTypeString = TransactionType[index];
    return this.transactionTypeString;
  }
  initializeForm(): void {
    this.taskForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      customer_Id: [{ value: '', disabled: true }],
      task_description: [''],
      document_type_id: ['', Validators.required],
      document_path: [''],
      status: [{ value: '', disabled: true }],
      due_date: ['', Validators.required],
      created_at: [{ value: '', disabled: true }],
      updated_at: [{ value: '', disabled: true }]
    });
  }

  loadTaskData(taskId: number): void {
    this.documentsService.getDocumentById(taskId).subscribe((task: IDocument) => {
      this.taskForm.patchValue(task);
    });
  }

  loadDocumentTypes(): void {
    this.documentsService.getAllDocumentType().subscribe(types => {
      this.documentTypes = types;
    });
  }


  saveTask(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.getRawValue();
      if (this.taskId === -1) {
        var docForSave: IDocument = taskData;
        docForSave.id = 0;
        docForSave.created_at = new Date();
        docForSave.updated_at = new Date();
        docForSave.customer_Id = +window.sessionStorage.getItem("customerId")!;
        console.log("in save id-"+docForSave.customer_Id);
        
        docForSave.status = 0;
        // docForSave.document_type_id=
        if (docForSave.task_description == "")
          docForSave.task_description = " ";
        this.documentsService.createDocument(docForSave).subscribe((res) => {
          console.log('Saving task:', res);
          this.router.navigate(['/admin/document-list']);
        });
      } else {
        this.documentsService.updateDocument(this.taskId, taskData).subscribe((res) => {
          console.log('Saving task:', res);
          this.router.navigate(['/admin/document-list']);
        });
      }
    }
  }
  cancel() {
    this.router.navigate(['/customer/document-list']);
  }
}
