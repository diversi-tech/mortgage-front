import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserListService } from '../../services/user-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Role, User } from '../../Models/User';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'id', 'role', 'email', 'actions'];
  users$!: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userListService: UserListService,public dialog: MatDialog) {  }

  ngOnInit() {
    this.userListService.getUsers().subscribe(users => {
      this.users$ = new MatTableDataSource(users);
      this.users$.sort = this.sort; // Set the MatSort instance to the data sourc
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users$.filter = filterValue.trim().toLowerCase();
  }
  deleteUser(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { id } // Pass customer object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userListService.deleteUserById(id!).subscribe({
          next: () => {
            this.users$.data = this.users$.data.filter(user => user.id !== id);
            console.log('User deleted successfully');
          },
          error: error => {
            console.error('Error deleting customer:', error);
          }
        });
      }
    });
}
  getUserTypeString(value: Role): string {
   
    switch (Number(value)) {
      case 0:
        return "מנהל";
      case 1:
        return "לקוח";
    }
    return 'error';
  }
}
