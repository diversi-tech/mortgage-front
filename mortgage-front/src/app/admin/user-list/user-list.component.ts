import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../global/confirm-dialog/confirm-dialog.component';
import { Role, IUser } from '../../shared/Models/user';
import { UserService } from '../../shared/Services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'id', 'role', 'email', 'actions'];
  usersDataSource = new MatTableDataSource<IUser>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadUsers();
  }
  isLoading = true; //mention if the data loaded

  loadUsers(): void {
    this.userService.users$.subscribe({
      next: users => {
        this.usersDataSource.data = users;
        this.usersDataSource.sort = this.sort;
        this.usersDataSource.paginator = this.paginator;

        this.isLoading=false;
      },
      error: error => {
        console.error('Error loading users:', error);
      }
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersDataSource.filter = filterValue.trim().toLowerCase();
  }

  editOrAddUser(id: number) {
    this.router.navigate(['admin/user-details', id]);
  }

  deleteUser(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id } // Pass user object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUserById(id).subscribe({
          next: () => {
            // this.usersDataSource.data = this.usersDataSource.data.filter(user => user.id !== id);
            this.snackBar.open('המשתמש נמחק בהצלחה!!', 'Close');
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
