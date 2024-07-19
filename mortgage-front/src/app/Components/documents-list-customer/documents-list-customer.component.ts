import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
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
    MaterialModule,
  ]

})


export class DocumentsListCustomerComponent implements OnInit {

  displayedColumns = ['name', 'type', 'status', 'icon', 'date', 'approval'];
  index: number = 0;

  documentStatusString: String = '';
  transactionType: DocumentType | undefined;
  transactionTypeString: String = '';
  dataSource: MatTableDataSource<Document> = new MatTableDataSource<Document>();
  private documentSubscription?: Subscription;

  selectedDocuments: File[] = [];
 

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private _service: DocumentsListCustomerService, private datePipe: DatePipe, private dialog: MatDialog) { }

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
    this.selectedDocuments[element.id]=file;
  
    element.document_path = file.name;
    element.status = 1;
  }
 }



  // xfunc(element: Document): void {
  //   alert("האם ברצונך לבטל את בחירת המסמך?")
  //   element.status = 0;
  // }

  //תצוגה של תאריך
  formatDate(date: any) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }


  xfunc(element:Document): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { element } // Pass customer object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }


}








