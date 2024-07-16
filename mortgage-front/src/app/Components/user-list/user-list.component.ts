import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Role,User } from '../../Models/User';
import { UserListService } from '../../Services/user-list.service';
import { MaterialModule } from '../../material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { TokenPayload } from '../../Models/Login';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ 
    MaterialModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'id', 'role', 'email', 'actions'];
  users$!: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userListService: UserListService,private router:Router, private snackBar: MatSnackBar,public dialog: MatDialog) {  }

  ngOnInit() {
    this.userListService.getUsers().subscribe(users => {
      this.users$ = new MatTableDataSource(users);
      this.users$.sort = this.sort; // Set the MatSort instance to the data sourc
      this.users$.paginator = this.paginator; // Set the MatPaginator instance to the data source

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users$.filter = filterValue.trim().toLowerCase();
  }

  editOrAddUser(id:number){
    this.router.navigate(['/user-details', id]);
  }

  deleteUser(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: { id } // Pass user object as data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userListService.deleteUserById(id!).subscribe({
          next: () => {
            this.users$.data = this.users$.data.filter(user => user.id !== id);
            this.snackBar.open('המשתמש נמחק בהצלחה!!', 'Close', {
            });
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
