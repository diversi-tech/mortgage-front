import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Customer } from '../../Models/Customer';
import { customerService } from '../../services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Lead } from '../../Models/Lead';

@Component({
  selector: 'customer-list',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerListComponent implements OnInit, OnDestroy {
  displayedColumns = ['first_Name', 'last_Name', 'address', 'phone', 'email', 'actions'];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();
  private customersSubscription?: Subscription;
  emailSubject = 'לחץ על הקישור כדי להיכנס לאתר';
  link = 'http://localhost:4200/';
  whatsappMessage = "לחץ על הקישור כדי להיכנס לאתר " + this.link;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: customerService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customersSubscription = this.customerService.customers$.subscribe({
      next: customers => {
        this.dataSource.data = customers;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('Error loading customers:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.customersSubscription) {
      this.customersSubscription.unsubscribe();
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  encodeMailtoLink(email: string, subject: string, body: string): string {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  encodeWhatsAppLink(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  getLeadInfo(leadId: number): Observable<Lead> {
    return this.customerService.getLeadById(leadId);
  }

  addCustomer(): void {
    this.router.navigate(['/customer-details', -1]);
  }

  editCustomer(selected: Customer): void {
    this.router.navigate(['/customer-details', selected.id]);
  }

  deleteCustomer(customer: Customer): void {
    const dialogRef = this.dialog.open(ConfirmDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(customer.id!).subscribe({
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
}


/*-------------------------confirm-dialog-component------------------------------------------ */
@Component({
  selector: 'confirm-dialog',
  standalone: true,
  styles: [``],
  imports: [MaterialModule, CommonModule],
  template: `
    <div >
      <h1 mat-dialog-title dir="rtl">מחיקת לקוח</h1>
      <div mat-dialog-content>?האם אתה בטוח שאתה רוצה למחוק את הלקוח הזה</div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()" >לא</button>
        <button mat-button color="primary" (click)="onYesClick()" cdkFocusInitial>כן</button>
      </div>
    </div>
  `
})
export class ConfirmDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}