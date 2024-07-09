import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DocumentsListCustomerService } from '../../Services/documents-list-customer.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DocumentStatus,Document } from '../../Models/document';




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

  displayedColumns = ['name', 'type', 'status', 'icon','approval'];
  // documents: any;
  customerId: number = 4; // לדוגמה, ללקוח מסוים עם ID מסוים
  documentStatusString: String = DocumentStatus[0];
  dataSource: MatTableDataSource<Document> = new MatTableDataSource<Document>();
  private documentSubscription?: Subscription;
  documentTypes?: DocumentType[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _service: DocumentsListCustomerService) { }


  ngOnInit(): void {
    this.loadDocuments();
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

  //enumפונקציה להמרת המספר לערך המחרוזתי שלו ב
  changeDocStatusToString(status: number): String {
    this.documentStatusString = DocumentStatus[status];
    return this.documentStatusString;
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log('Selected file:', file);
  }


}








