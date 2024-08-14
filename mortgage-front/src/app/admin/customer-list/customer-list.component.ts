import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ICustomer, Customer_Type } from '../../shared/Models/Customer';
import { customerService } from '../../shared/Services/costumer.service';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {  MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  displayedColumns = ['first_Name','last_Name', 'address', 'phone', 'Customer_type', 'actions'];
  leads: MatTableDataSource<ICustomer> = new MatTableDataSource<ICustomer>();
  customers: MatTableDataSource<ICustomer> = new MatTableDataSource<ICustomer>();
  archivedCustomers: MatTableDataSource<ICustomer> = new MatTableDataSource<ICustomer>();
  private customersSubscription?: Subscription;
  @ViewChild('leadsPaginator') leadsPaginator!: MatPaginator;
  @ViewChild('customersPaginator') customersPaginator!: MatPaginator;
  @ViewChild('archivedCustomersPaginator') archivedCustomersPaginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: customerService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCustomers();
  }
isLoading:boolean=true;
  loadCustomers(): void {
    this.customersSubscription = this.customerService.customers$.subscribe({
      next: (customers: any[]) => {
        this.leads.data = customers.filter(customer => customer.customer_type === 0);
        this.customers.data = customers.filter(customer => customer.customer_type === 1);
        this.archivedCustomers.data = customers.filter(customer => customer.customer_type === 2);

        this.leads.sort = this.sort;
        this.customers.sort = this.sort;
        this.archivedCustomers.sort = this.sort;

        this.leads.paginator = this.leadsPaginator;
        this.customers.paginator = this.customersPaginator;
        this.archivedCustomers.paginator = this.archivedCustomersPaginator;
        this.isLoading=false;
      },
      error: (error: any) => {
        console.error('Error loading customers:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.customersSubscription) {
      this.customersSubscription.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.leads.filter = filterValue;
    this.customers.filter = filterValue;
    this.archivedCustomers.filter = filterValue;

    if (this.leads.paginator) {
      this.leads.paginator.firstPage();
    }
    if (this.customers.paginator) {
      this.customers.paginator.firstPage();
    }
    if (this.archivedCustomers.paginator) {
      this.archivedCustomers.paginator.firstPage();
    }
  }

  addCustomer(): void {
    this.router.navigate(['admin/customer-details/','']);
  }

  editCustomer(customer: ICustomer): void {
    this.router.navigate(['admin/customer-details/', customer.id]);
  }
  sendMsg(customer:ICustomer):void{
    this.router.navigate(['admin/send-notification/', customer.id]);
  }
  deleteCustomer(customer: ICustomer): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { customer } // Pass customer object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(customer.id!).subscribe({
          next: () => {
            console.log('lead deleted successfully');
          },
          error: error => {            
          }
        });
      }
    });
  }

  getCustomerTypeString(customer_type: Customer_Type): string {
    switch (customer_type) {
      case 0:
        return 'ליד';
      case 1:
        return 'לקוח';
      case 2:
        return 'בארכיון';
      default:
        return 'לא ידוע';
    }
  }
}