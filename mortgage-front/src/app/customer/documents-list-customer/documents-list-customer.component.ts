import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Status, IDocument } from '../../shared/Models/Document';
import { IDocumentType, TransactionType } from '../../shared/Models/DocumentTypes.Model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
import { UploadService } from '../../shared/Services/fileService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckbox, } from '@angular/material/checkbox';
import { loginService } from '../../shared/Services/login.service';
import { Router } from '@angular/router';
import { ICustomer } from '../../shared/Models/Customer';
import { FormControl } from '@angular/forms';
import { customerService } from '../../shared/Services/costumer.service';
import { log } from 'console';

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

  displayedColumns = ['task_description', 'document_type_id', 'status', 'document_path', "document_path2", 'created_at', 'isOk', 'actions'];
  // documentsSendIndex: number[] = [];
  isOkCount: number = 0;
  customerId!: number;
  documentStatusString: String = '';
  transactionType: IDocumentType | undefined;
  transactionTypeString: String = '';
  dataSource: MatTableDataSource<IDocument> = new MatTableDataSource<IDocument>();
  private documentSubscription?: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChildren('myCheckbox') checkboxes!: QueryList<MatCheckbox>;

  constructor(private documentService: DocumentsListCustomerService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private fileService: UploadService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public loginService: loginService,
    private customerService: customerService) {
    if (this.loginService.isAdmin())
      this.customerService.fetchCustomers().subscribe();
  }

  //Variables for the customers search 
  customerControl = new FormControl();
  customers: ICustomer[] = [];
  filteredCustomers?: Observable<ICustomer[]>;

  private _filterCustomers(name: string): ICustomer[] {
    const filterValue = name.toLowerCase();
    return this.customers.filter(customer => customer.first_Name?.toLowerCase().includes(filterValue));
  }
  //To display the customer who typed his name
  displayCustomer(customer: ICustomer): string {
    return customer && customer.first_Name ? customer.first_Name : '';
  }

  async onCustomerSelected(customer: ICustomer) {
    this.customerId = customer.id!;
    if (typeof window && window.sessionStorage != undefined)
      window.sessionStorage.setItem("customerId", this.customerId.toString())!;
    this.documentService.fetchDocumentsByCustomerId(customer.id || 0).subscribe({
      next: documents => {
        this.dataSource.data = documents;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('Error loading documents for customer:', error);
      }
    });
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      (customers: ICustomer[]) => {
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
          this.fetchDocumentTypes();
          this.customerId = currentId;
        }
      }
      this.loadDocuments();
      this.loadCustomers();
    }
    else {
      this.fetchDocumentTypes();
      this.customerId = this.loginService.GetCurrentUser().customerId!;
    }
    this.loadDocuments();
    if (this.customerId)
      this.documentService.fetchDocumentsByCustomerId(this.customerId).subscribe({
        next: documents => {
          documents.forEach((file) => {
            let tempDoc = this.documentService.selectedDocuments.filter(doc => doc.id == file.id);
            if (tempDoc[0]) {
              if (this.loginService.isAdmin()) {
                file.status2 = tempDoc[0].status2;
                file.document_path2 = tempDoc[0].document_path2;
                file.adminFile = tempDoc[0].adminFile;
              }
              else {
                file.status = tempDoc[0].status;
                file.document_path = tempDoc[0].document_path;
                file.customerFile = tempDoc[0].customerFile;

              }

            }
            this.documentService.selectedDocuments.push(file);
          })
          this.dataSource.data = documents;
          this.dataSource.paginator = this.paginator;
        },
        error: error => {
          console.error('Error loading documents for customer:', error);
        }
      });
  }

  ngAfterViewInit() {
    this.checkboxes.forEach((checkbox, index) => {
    });
  }

  getCheckboxStatus(index: number): boolean {
    const checkboxArray = this.checkboxes.toArray();
    return checkboxArray[index] ? checkboxArray[index].checked : false;
  }
  loadDocuments(): void {
    console.log('in load');

    this.documentSubscription = this.documentService.documents$.subscribe({
      next: documents => {
        this.dataSource.data = documents;
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
  documentTypes: IDocumentType[] = [];
  fetchDocumentTypes() {
    this.documentService.getAllDocumentType().subscribe(
      (response) => {
        this.documentTypes = response;
      },
      (error) => {
        console.error('Error fetching document types:', error);
      }
    );
  }
  onCheckboxChange(checked: boolean, document: IDocument): void {
    if (checked == true) {
      this.isOkCount++;
      // this.documentsSendIndex.push(document.id);
      console.log("this.isOkCount=" + this.isOkCount);
      document.isOk = true;
    }

    else {
      this.isOkCount--;
      console.log("this.isOkCount=" + this.isOkCount);
      document.isOk = false;
    }
  }

  //Converts the status enum value to the string value
  changeDocStatusToString(index: number): String {
    this.documentStatusString = Status[index];
    return this.documentStatusString;
  }

  //Converts the transactionType enum value to the string value
  changeTransacTypeToString(index: number): String {
    // this.documentService.    
    // console.log(this.documentTypesByCustomer);
    let trans;
    if (this.documentTypes.length > 0)
      trans = this.documentTypes?.find(type => type.id == index)?.transaction_Type;
    this.transactionTypeString = TransactionType[trans!];
    return this.transactionTypeString;
  }


  onFileSelected(event: any, document: IDocument): void {
    // document.document_path
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      if (this.loginService.isAdmin()) {
        document.adminFile = file
        document.document_path2 = file.name;
        document.status2 = 1;
        console.log('in select doc=' + document);
      }
      else {
        document.customerFile = file;
        document.document_path = file.name;
        document.status = 1;
      }
      this.documentService.selectedDocuments.forEach(doc => {
        if (doc.id == document.id) {
          if (this.loginService.isAdmin()) {
            doc.adminFile = file;
            doc.document_path2 = file.name;
            doc.status2 = 1;
          }
          else {
            doc.customerFile = file;
            doc.document_path = file.name;
            doc.status = 1;
          }
        }
      })
      var tempList = this.documentService.selectedDocuments
      this.documentService.selectedDocuments = tempList;
    }
  }

  cancelDocument(document1: IDocument): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { document1 } // Pass customer object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.loginService.isAdmin()) {
          document1.adminFile = undefined;
          document1.status2 = 0;
          document1.document_path2 = undefined;
        } else {
          document1.customerFile = undefined;
          document1.status = 0;
          document1.document_path = undefined;
        }
        if (document1.isOk)
          this.isOkCount--;
        var tempList = this.documentService.selectedDocuments
        this.documentService.selectedDocuments = tempList;
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
    console.log('data=:');
    console.log(this.dataSource.data);

    if (this.loginService.isAdmin()) {
      this.documentService.selectedDocuments = (this.dataSource.data
        .filter(obj => obj.adminFile !== undefined && obj.adminFile !== null)) // filter out undefined and null
    }
    else {
      this.documentService.selectedDocuments = this.dataSource.data
        .filter(obj => obj.customerFile !== undefined && obj.customerFile !== null) // filter out undefined and null
    }
    let countNotNullOrUndefined = this.documentService.selectedDocuments.filter(value => value !== null && value !== undefined).length;
    console.log("this.isOkCount=" + this.isOkCount + "  countNotNullOrUndefined=" + countNotNullOrUndefined);
    if (countNotNullOrUndefined != this.isOkCount) {
      this.openSnackBar(' יש לאשר תחילה את כל המסמכים שנבחרו.', 'בטל');
      return;
    }

    if (countNotNullOrUndefined == 0) {
      this.openSnackBar('עדיין לא נבחרו מסמכים.', 'בטל');
      return;
    }
    this.fileService.uploadFiles(this.documentService.selectedDocuments)?.subscribe(
      (event: any) => {
        if (event.status === 'progress') {
        }
        else if (!event.includes("Unhandled")) {
          for (let i = 0; i < this.documentService.selectedDocuments.length; i++) {
            this.dataSource.data.forEach(doc => {
              if (doc.customerFile) {
                doc.status = 2;
                doc.updated_at = new Date();
              }
              else if (doc.adminFile) {
                doc.status2 = 2;
                doc.updated_at = new Date();
              }
            });
          }
          countNotNullOrUndefined = 0;
          this.documentService.selectedDocuments = [];
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
    var filteredDocuments;
    if (this.loginService.isAdmin())
      filteredDocuments = this.dataSource.data.filter(doc => doc.adminFile)
    else
      filteredDocuments = this.dataSource.data.filter(doc => doc.customerFile)
    this.documentService.updateMultipleDocuments(filteredDocuments)
      .subscribe(
        () => {
          console.log('The documents have been successfully updated on the server');
        },
        error => {
          console.error('Error updating the documents on the server:', error);
        }
      );
  }

  download(fileName: string, id: string) {
    this._snackBar.open("ההורדה מתחילה", "X");
    this.fileService.downloadFile(id).subscribe(
      (response) => {
        const contentDisposition = response.headers.get('Content-Disposition');
        this.saveDownloadFile(response.body!, fileName!);
      },
      (error) => {
        alert('Error downloading file'); console.log(error);
      }
    );
  }

  private saveDownloadFile(blob: Blob, fileName: string): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.click();
    window.URL.revokeObjectURL(downloadLink.href);
  }

  deleteTask(element: IDocument) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'האם אתה בטוח שברצונך למחוק את המסמך?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.documentService.deleteDocument(element.id).subscribe(
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

  editTask(element: IDocument) {
    if (typeof window && window.sessionStorage != undefined)
      window.sessionStorage.setItem("customerId", element.customer_Id.toString());
    this.router.navigate([`admin/task-edit/${element.id}`]);
  }
  addTask() {
    this.documentService.customerId = this.customerId;
    if (typeof window && window.sessionStorage != undefined)
      window.sessionStorage.setItem("customerId", this.customerId.toString());
    this.router.navigate([`admin/task-edit/${-1}`]);
  }
}