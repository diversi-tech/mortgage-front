import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { Customer, Customer_type } from '../../Models/Customer';
import { customerService } from '../../services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import {  MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'customer-list',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerListComponent implements OnInit, OnDestroy {
  displayedColumns = [ 'name', 'address', 'phone','Customer_type', 'actions'];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();
  private customersSubscription?: Subscription;
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
    this.router.navigate(['/customer-details', -1]);
  }

  editCustomer(selected: Customer): void {
    this.router.navigate(['/customer-details', selected.id]);
  }
 
  deleteCustomer(customer: Customer): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { customer } // Pass customer object as data to the dialog
    });
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
  getCustomerTypeString(value: Customer_type): string {
    // console.log('value=' + value);
    
    switch (Number(value)) {
      case 0:
        // console.log(value);
        return "ליד";
      case 1:
        return "לקוח";
      case 2:
        return "בארכיון";
      default:
        'אחר'
    }
    return 'error';
  }
}
