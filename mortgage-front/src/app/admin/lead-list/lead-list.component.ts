import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { ICustomer } from '../../shared/Models/Customer';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {  MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ILead } from '../../shared/Models/Lead';
import { leadService } from '../../shared/Services/lead.service';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { magicLinkService } from '../../shared/Services/magicLinkService';


@Component({
  selector: 'lead-list',
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.scss'
})
export class LeadListComponent implements OnInit,OnDestroy,AfterViewInit{
  displayedColumns = ['link','first_Name', 'phone', 'email', 'actions'];
  dataSource: MatTableDataSource<ILead> = new MatTableDataSource<ILead>();
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
isLoading:boolean=true;
  
  loadLeads(): void {
    // Fetch initial data to populate the subject
        // Subscribe to leads$ after fetching initial data
        this.leadsSubscription = this.leadService.leads$.subscribe({
          next: leads => {
            this.dataSource.data = leads; // Update dataSource with the latest leads
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.isLoading=false;
          },
          error: error => {
            console.error('Error loading leads:', error);
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

    this.router.navigate(['admin/lead-details/', -1]);  }

  editLead(selected: ICustomer): void {
    this.router.navigate(['admin/lead-details/', selected?.id]);
  }
  deleteLead(lead: ILead): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { lead } // Pass customer object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.leadService.deleteCustomer(lead.id!).subscribe({
          next: () => {
            console.log('lead deleted successfully');
          },
          error: error => {
            console.error('Error deleting customer:', error);
          }
        });
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000, // Duration in milliseconds for how long the snackbar should be visible
      direction:'rtl'
    });
  }
sendLink(id: number) {
  this.magicLinkService.sendMagicLink(id).subscribe({
    next: response => {
      this.openSnackBar('הלינק נשלח בהצלחה!', 'Close');
    },
    error: error => {
      console.error('Error sending  link:', error);
      this.openSnackBar('Failed to send  link.', 'Close');
    }
  });
}
}