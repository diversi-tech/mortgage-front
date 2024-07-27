import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation, HostListener, ElementRef, viewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DocumentsListCustomerService } from '../../Services/documents-list-customer.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Status, Document } from '../../Models/Document';
import { DocumentType, TransactionType } from '../../Models/DocumentTypes.Model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UploadService } from '../../Services/fileService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';


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
  standalone: true,
  imports: [
    MaterialModule, MatCheckboxModule
  ],
  providers: [DatePipe]

})


export class DocumentsListCustomerComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'type', 'status', 'icon', 'date', 'approval'];
  documentsSendIndex: number[] = [];
  isOkCount: number = 0;

  documentStatusString: String = '';
  transactionType: DocumentType | undefined;
  transactionTypeString: String = '';
  dataSource: MatTableDataSource<Document> = new MatTableDataSource<Document>();
  private documentSubscription?: Subscription;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChildren('myCheckbox') checkboxes!: QueryList<MatCheckbox>;

  ngAfterViewInit() {
    this.checkboxes.forEach((checkbox, index) => {
      console.log(`Checkbox ${index} checked: ${checkbox.checked}`);
    });
  }

  getCheckboxStatus(index: number): boolean {
    const checkboxArray = this.checkboxes.toArray();
    return checkboxArray[index] ? checkboxArray[index].checked : false;
  }

  constructor(private _service: DocumentsListCustomerService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private fileService: UploadService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadDocuments();
    this.fetchdocumentType();
  }

  loadDocuments(): void {
    this.documentSubscription = this._service.documents$.subscribe({
      next: documents => {
        this.dataSource.data = documents;
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

  
  fetchdocumentType(): void {
    this._service.fetchDocumentsTypesById(this._service.customerId).subscribe(
      (data: DocumentType) => {
        this.transactionType = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onCheckboxChange(checked: boolean, element: Document): void {
    if (checked==true){
      this.isOkCount++;
      this.documentsSendIndex.push(element.id);
      element.isOk=true;
     }

    else {
      this.documentsSendIndex = this.documentsSendIndex.filter(obj => obj !== element.id);
      this.isOkCount--;
      element.isOk=false;
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

        if (document1.isOk==true) {
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
      direction:'rtl',
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
          for(let i=0;i<this.documentsSendIndex.length;i++){
              this.dataSource.data.forEach(doc => {
              if (doc.id === this.documentsSendIndex[i]) {
                doc.status = 2;
                doc.created_at=new Date();
                doc.due_date=new Date();
                doc.updated_at=new Date();
              }
            });
          }
          countNotNullOrUndefined=0;
          this._service.selectedDocuments=[];
          this.isOkCount=0;
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


  download(fileId:string) {
    this.fileService.downloadFile(fileId).subscribe(
      (response) => {
        const contentDisposition = response.headers.get('Content-Disposition');
        const fileName = this.dataSource.data[parseInt(fileId)].document_path!;
        this.saveDownloadFile(response.body!, fileName);
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

}