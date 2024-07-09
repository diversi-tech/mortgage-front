import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { Customer } from '../../Models/Customer';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {  MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Lead } from '../../Models/Lead';
import { leadService } from '../../Services/lead.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { magicLinkService } from '../../Services/magicLinkService';
@Component({
  selector: 'lead-list',
  standalone: true,
  imports: [
    MaterialModule,
     CommonModule
  ],
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.scss'
})
export class LeadListComponent implements OnInit,OnDestroy,AfterViewInit{
  displayedColumns = ['link','first_Name', 'phone', 'email', 'actions'];
  dataSource: MatTableDataSource<Lead> = new MatTableDataSource<Lead>();
  private leadsSubscription?: Subscription;
  emailSubject = 'לחץ על הקישור כדי להיכנס לאתר';
  link = this.leadService.sendLink();
  whatsappMessage = "לחץ על הקישור כדי להיכנס לאתר\n" + this.link;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private leadService: leadService,
     private router: Router, 
     public dialog: MatDialog,
     private magicLinkService: magicLinkService,
      private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads(): void {
    this.leadsSubscription = this.leadService.leads$.subscribe({
      next: leads => {
        this.dataSource.data = leads;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        // console.error('Error loading customers:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.leadsSubscription) {
      this.leadsSubscription.unsubscribe();
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
  encodeMailtoLink(email: string, subject: string, body: string): string {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  encodeWhatsAppLink(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  addLead(): void {

    this.router.navigate(['/lead-tetails/', -1]);  }

  editLead(selected: Customer): void {
    this.router.navigate(['/lead-tetails/', selected?.id]);
  }
  deleteLead(customer: Customer): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { customer } // Pass customer object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.leadService.deleteCustomer(customer.id!).subscribe({
          next: () => {
            console.log('Customer deleted successfully');
          },
          error: error => {
            // console.error('Error deleting customer:', error);
          }
        });
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000, // Duration in milliseconds for how long the snackbar should be visible
    });
  }
sendLink(id: number) {
  this.magicLinkService.sendMagicLink(id).subscribe({
    next: response => {
      this.openSnackBar('Link sent successfully!', 'Close');
    },
    error: error => {
      console.error('Error sending  link:', error);
      this.openSnackBar('Failed to send  link.', 'Close');
    }
  });
}
}