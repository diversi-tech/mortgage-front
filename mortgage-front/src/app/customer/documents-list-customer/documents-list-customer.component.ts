import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Status, Document } from '../../shared/Models/document';
import { DocumentType, TransactionType } from '../../shared/Models/DocumentTypes.Model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
import { UploadService } from '../../shared/Services/fileService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckbox, } from '@angular/material/checkbox';
import { loginService } from '../../shared/Services/login.service';
import { Router } from '@angular/router';
import { Customer } from '../../shared/Models/Customer';
import { FormControl } from '@angular/forms';
import { customerService } from '../../shared/Services/costumer.service';

@Component({
  selector: 'documents-list-customer',
  templateUrl: './documents-list-customer.component.html',
  styleUrl: './documents-list-customer.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [DatePipe]

})

export class DocumentsListCustomerComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'type', 'status', 'icon', 'date', 'approval'];
  documentsSendIndex: number[] = [];
  isOkCount: number = 0;
  customerId!: number;
  documentStatusString: String = '';
  transactionType: DocumentType | undefined;
  transactionTypeString: String = '';
  dataSource: MatTableDataSource<Document> = new MatTableDataSource<Document>();
  private documentSubscription?: Subscription;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChildren('myCheckbox') checkboxes!: QueryList<MatCheckbox>;

  constructor(private _service: DocumentsListCustomerService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private fileService: UploadService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public loginService: loginService,
    private customerService: customerService) { }


  //========================================================
  customerControl = new FormControl();
  customers: Customer[] = [];
  filteredCustomers?: Observable<Customer[]>;

  private _filterCustomers(name: string): Customer[] {
    const filterValue = name.toLowerCase();
    return this.customers.filter(customer => customer.first_Name?.toLowerCase().includes(filterValue));
  }

  displayCustomer(customer: Customer): string {
    return customer && customer.first_Name ? customer.first_Name : '';
  }

  async onCustomerSelected(customer: Customer) {
    console.log('Customer selected:', customer);
    // this.loadDocuments();
    // this.fetchdocumentType(customer.id||0);
    this.customerId = customer.id!;
    this._service.fetchDocumentsByCustomerId(customer.id || 0).subscribe({
      next: documents => {
        this.dataSource.data = documents;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('Error loading documents for customer:', error);
      }
    });
  }

  //====================================================================================
  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
        this.filteredCustomers = this.customerControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.first_Name),
            map(name => name ? this._filterCustomers(name) : customers.slice())
          );
      },
    )
  }

  ngOnInit(): void {
    this.loadDocuments();
    if (this.loginService.isAdmin()) {
      if (typeof window && window.sessionStorage != undefined) {
        let currentId = +window.sessionStorage.getItem("customerId")!;
        if (currentId) { 
          this.fetchdocumentType(currentId);
          this.customerId=currentId;
         }
      }
      this.loadCustomers();
    }
    else {
      this.fetchdocumentType(this.loginService.GetCurrentUser().customerId!);
      console.log('in feych in if:' + this.loginService.GetCurrentUser().customerId);
      this.customerId = this.loginService.GetCurrentUser().customerId!;
    }
    this.loadDocuments();
    if(this.customerId)
    this._service.fetchDocumentsByCustomerId(this.customerId).subscribe({
      next: documents => {
        this.dataSource.data = documents;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('Error loading documents for customer:', error);
      }
    });
  }
  ngAfterViewInit() {
    this.checkboxes.forEach((checkbox, index) => {
      console.log(`Checkbox ${index} checked: ${checkbox.checked}`);
    });
  }

  getCheckboxStatus(index: number): boolean {
    const checkboxArray = this.checkboxes.toArray();
    return checkboxArray[index] ? checkboxArray[index].checked : false;
  }
  loadDocuments(): void {
    this.documentSubscription = this._service.documents$.subscribe({
      next: documents => {
        this.dataSource.data = documents;
        console.log(documents);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('Error loading documents:', error);
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  fetchdocumentType(id: number): void {
    this._service.fetchDocumentsTypesById(id).subscribe(
      (data: DocumentType) => {
        this.transactionType = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onCheckboxChange(checked: boolean, element: Document): void {
    if (checked == true) {
      this.isOkCount++;
      this.documentsSendIndex.push(element.id);
      element.isOk = true;
    }

    else {
      this.documentsSendIndex = this.documentsSendIndex.filter(obj => obj !== element.id);
      this.isOkCount--;
      element.isOk = false;
    }
  }

  //Converts the status enum value to the string value
  changeDocStatusToString(index: number): String {
    this.documentStatusString = Status[index];
    return this.documentStatusString;
  }

  //Converts the transactionType enum value to the string value
  changeTransacTypeToString(index: number): String {
    this.transactionTypeString = TransactionType[index];
    return this.transactionTypeString;
  }


  onFileSelected(event: any, element: Document): void {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      this._service.addFile(file, element.id);
      element.document_path = file.name;
      element.status = 1;
    }
  }


  view(index: number): File | null {
    return this._service.selectedDocuments[index];
  }


  cancelDocument(document1: Document): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { document1 } // Pass customer object as data to the dialog

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        document1.status = 0;

        if (document1.isOk == true) {
          this.documentsSendIndex = this.documentsSendIndex.filter(obj => obj !== document1.id);
          this.isOkCount--;
        }

        this._service.addFile(null, document1.id);
      }
    });
  }


  formatDate(date: any) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  viewDocument(file: File | null) {
    if (file) {
      const url = URL.createObjectURL(file);
      window.open(url);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      direction: 'rtl',
      panelClass: ['custom-snackbar']
    });
  }


  saveFiles() {
    let countNotNullOrUndefined = this._service.selectedDocuments.filter(value => value !== null && value !== undefined).length;
    if (countNotNullOrUndefined != this.isOkCount) {
      this.openSnackBar(' יש לאשר תחילה את כל המסמכים שנבחרו.', 'בטל');
      return;
    }

    if (countNotNullOrUndefined == 0) {
      this.openSnackBar('עדיין לא נבחרו מסמכים.', 'בטל');
      return;
    }

    this.fileService.uploadFiles(this._service.selectedDocuments)?.subscribe(
      (event: any) => {
        if (event.status === 'progress') {
        }

        else if (!event.includes("Unhandled")) {
          for (let i = 0; i < this.documentsSendIndex.length; i++) {
            this.dataSource.data.forEach(doc => {
              if (doc.id === this.documentsSendIndex[i]) {
                doc.status = 2;
                doc.created_at = new Date();
                doc.due_date = new Date();
                doc.updated_at = new Date();
              }
            });
          }
          countNotNullOrUndefined = 0;
          this._service.selectedDocuments = [];
          this.isOkCount = 0;
          this.onSaveChangesInServer();
          this.openSnackBar('המסמכים הועלו בהצלחה!', 'x');
        }
      },
      (error: any) => {
        this.openSnackBar('ארעה שגיאה. לא התבצעה שליחה :(', 'x');
        console.error('Upload error:', error);
      }
    );
  }


  onSaveChangesInServer(): void {
    this._service.updateMultipleDocuments(this.dataSource.data)
      .subscribe(
        () => {
          console.log('The documents have been successfully updated on the server');
        },
        error => {
          console.error('Error updating the documents on the server:', error);
        }
      );
  }


  download(fileId: string) {
    this._snackBar.open("ההורדה מתחילה", "X");
    this.fileService.downloadFile(fileId).subscribe(
      (response) => {
        const contentDisposition = response.headers.get('Content-Disposition');
        const n = this.dataSource.data.filter(doc => doc.id == +fileId)[0].document_path || "";
        console.log(n);
        // const fileName = this.dataSource.data[+fileId].document_path!;
        this.saveDownloadFile(response.body!, n);
      },
      (error) => alert('Error downloading file')
    );
  }

  private saveDownloadFile(blob: Blob, fileName: string): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.click();
    window.URL.revokeObjectURL(downloadLink.href);
  }


  deleteTask(element: Document) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'האם אתה בטוח שברצונך למחוק את המסמך?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._service.deleteDocument(element.id).subscribe(
          (response: any) => {
            console.log(response);
            this.dataSource.data = this.dataSource.data.filter(doc => doc.id !== element.id);
            this.openSnackBar('המסמך נמחק בהצלחה', "בטל");
          },
          (error: any) => {
            console.error('Error deleting document:', error);
            this.openSnackBar('ארעה שגיאה בעת מחיקת המסמך', "בטל");
          }
        );
      }
    });
  }


  editTask(element: Document) {
    this.router.navigate([`customer/task-edit/${element.id}`]);
  }
  addTask() {
    this._service.customerId = this.customerId;
    this.router.navigate([`customer/task-edit/${-1}`]);
  }


}