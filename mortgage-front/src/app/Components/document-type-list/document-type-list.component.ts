import { Component, ViewChild,Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { IDocumentType ,TransactionType} from '../../Models/DocumentTypes';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DocumentTypeService } from '../../Services/documentType.service';
import {  MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrl: './document-type-list.component.css',
  standalone: true,
  imports:[MaterialModule]
})
export class DocumentTypeListComponent {

  doctransactionTypeString: String = TransactionType[0];
  displayedColumns = [ 'name', 'required', 'TransactionType','actions'];
  dataSource: MatTableDataSource<IDocumentType> = new MatTableDataSource<IDocumentType>();
  private documentSubscription?: Subscription;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _documentTypeservice: DocumentTypeService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDocumentType();
  }

  loadDocumentType(): void {
    this.documentSubscription = this. _documentTypeservice.documentTypes$.subscribe({
      next: documentType => {
        this.dataSource.data = documentType;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('Error loading customers:', error);
      }
    });    
  }

  ngOnDestroy(): void {
    if (this.documentSubscription) {
      this.documentSubscription.unsubscribe();
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addCustomer(): void {
    this.router.navigate(['/documentType-details', -1]);
  }

  editDocument(selected: IDocumentType): void {
    this.router.navigate(['/documentType-details', selected.id]);
  }
 
  deleteDocument(documentType: IDocumentType): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { documentType } // Pass documentType object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this. _documentTypeservice.deleteDocumentType(documentType.id!).subscribe({
          next: () => {
            console.log('Customer deleted successfully');
          },
          error: error => {
            console.error('Error deleting customer:', error);
          }
        });
      }
    });
  }  
  changeDocStatusToString(status: number): String
  {
      this.doctransactionTypeString = TransactionType[status];
      return this.doctransactionTypeString;
  }
   changeRequired(required:boolean):String
   {
    if(required==true)
        return "כן";
  return "לא";
   }
  
}
