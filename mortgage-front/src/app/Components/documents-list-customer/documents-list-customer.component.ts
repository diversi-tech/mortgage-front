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
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UploadService } from '../../Services/fileService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

// interface myDocument {
//   document: Document;
//   ok: boolean;
// }

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
  index: number = 0;
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
    // כעת תוכל לגשת לכל ה-checkboxes לאחר שהקומפוננטה נטענה
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

  //פילטר-חיפוש
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //טעינת המסמכים לדפדפן
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
    // element.ok = checked; // Update the isOk property of the element object
    console.log('Updated isOk:', element);
    if (checked)
      this.isOkCount++;
    else
      this.isOkCount--;
  }

  //status enum פונקציה להמרת המספר לערך המחרוזתי שלו ב
  changeDocStatusToString(index: number): String {
    this.documentStatusString = Status[index];
    return this.documentStatusString;
  }

  //transactionType enum פונקציה להמרת המספר לערך המחרוזתי שלו ב 
  changeTransacTypeToString(index: number): String {
    this.transactionTypeString = TransactionType[index];
    return this.transactionTypeString;
  }

  //בחירת קובץ
  onFileSelected(event: any, element: Document): void {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      this._service.addFile(file, element.id);
      element.document_path = file.name;
      element.status = 1;
    }
  }

  view(ind: number): File | null {
    return this._service.selectedDocuments[ind];
  }

  xfunc(document1: Document,index:number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { document1 } // Pass customer object as data to the dialog

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        document1.status = 0;
        // var elem=document.getElementById("mat-checkbox");
        // var check=document.getElementsByTagName('input');
        // check[0].checked=false;
        // if(elem.)
        if (this.getCheckboxStatus(index))
          this.isOkCount--;
        this._service.addFile(null, document1.id);
        // elem!.checked=false;
        console.log('in cacncel');
      }

    });
  }

  //תצוגה של תאריך
  formatDate(date: any) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  viewDocument(file: File | null) {
    console.log("in viewDocument");
    if (file) {
      const url = URL.createObjectURL(file);
      window.open(url);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  saveFiles() {
    console.log(this._service.selectedDocuments);

    console.log("in save files");

    const countNotNullOrUndefined = this._service.selectedDocuments.filter(value => value !== null && value !== undefined).length;
    if (countNotNullOrUndefined != this.isOkCount) {
      this.openSnackBar(' יש לאשר תחילה את כל המסמכים שהעלית', 'בטל');
      console.log("countNotNullOrUndefined=" + countNotNullOrUndefined + ", isOkCount=" + this.isOkCount);
      return;
    }
    console.log();

    if (countNotNullOrUndefined == 0) {
      this.openSnackBar(' אין לשלוח ללא בחירת מסמכים', 'בטל');
      return;
    }
    console.log("in save");
    this.fileService.uploadFiles(this._service.selectedDocuments, this._service.customerId.toString())?.subscribe(
      (event: any) => {
        if (event.status === 'progress') {
        } else if (!event.includes("Unhandled")) {
          console.log('Files uploaded successfully:', event.files);
          console.log('event=' + event);

          this.openSnackBar('המסמכים הועלו בהצלחה!', 'Close');
        }
      },
      (error: any) => {
        this.openSnackBar('ארעה שגיאה בעת ההעלאה :(', 'Close');
        console.error('Upload error:', error);
      }
    );
    // this.fileService.uploadFiles(this._service.selectedDocuments, this._service.customerId.toString()).subscribe(
    //   (event) => {
    //     console.log('Upload event:', event);
    //   },
    //   (error) => {
    //     console.error('Upload error:', error);
    //   }
    // );
    // this.fileService.uploadFiles(this._service.selectedDocuments, this._service.customerId.toString());
  }

}