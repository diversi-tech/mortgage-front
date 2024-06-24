// src/app/components/customer-list/customer-list.component.ts
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Customer } from '../../Models/Customer';
import { customerService } from '../../services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-list',
  standalone: true,
  imports: [MaterialModule, MatPaginator, MatSort],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  CUSTOMERS: Customer[] = [];
  displayedColumns = ['First_Name', 'Last_Name', 'Address', 'Phone', 'Email'];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: customerService,private router: Router) {}
  ngOnInit(): void {
    this.CUSTOMERS=this.customerService.getAllCustomers();
      this.dataSource.data = this.CUSTOMERS;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  // ngOnInit(): void {
  //   this.customerService.getAllCustomers().subscribe(customers => {
  //     this.CUSTOMERS = customers;
  //     this.dataSource.data = this.CUSTOMERS;
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;
  //   });
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
    this.router.navigate(['/customer-details']);
    
  }
  // loadCustomers(): void {
  //   this.dataSource.data = this.customerService.getAllCustomers();
  // }
}


// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MaterialModule } from '../../material/material.module';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { ICustomer } from '../../Models/ICustomer';
// import { customerService } from '../../services/costumer.service';

// @Component({
//   selector: 'customer-list',
//   standalone: true,
//   imports: [MaterialModule,MatPaginator,MatSort],
//   templateUrl: './customer-list.component.html',
//   styleUrl: './customer-list.component.scss'
// })
// export class CustomerListComponent 
//  {
//   CUSTOMERS:ICustomer[]=[];

//   displayedColumns = ['first_name', 'last_name', 'address', 'phone','email'];
//   dataSource: MatTableDataSource<ICustomer> = new MatTableDataSource<ICustomer>();
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(customerService:customerService){
//     this.CUSTOMERS=customerService.getAllStudents();
//     this.dataSource = new MatTableDataSource(this.CUSTOMERS);
//     this.dataSource.sort = this.sort;

//     // this.studentService.getStudentsFromServer().subscribe(data =>{
//     //   this.students = data});
//   }
//     @ViewChild(MatPaginator) paginator!: MatPaginator;
//     ngOnInit() {
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//       }
//     applyFilter(event: Event) {
//     console.log("in filter");
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

//Get this information from service- build the service and server

// {
//   displayedColumns: string[] = ['Id', 'name', 'address', 'phone'];
//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
  
// }
