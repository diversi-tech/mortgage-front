// src/app/Components/user-list/user-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Role, User } from '../../Models/User';
import { UserListService } from '../../Services/user-list.service';
import { MaterialModule } from '../../material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ 
    // AppRoutingModule, 
    // RouterModule,
    MaterialModule,
    // CommonModule,
    // ReactiveFormsModule,
    // FormsModule 
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'id', 'role', 'email', 'actions'];
  users$!: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userListService: UserListService,private router:Router, private snackBar: MatSnackBar) {  }

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

  deleteUser(id: number) {
    this.userListService.deleteUserById(id).subscribe(() => {
      this.users$.data = this.users$.data.filter(user => user.id !== id);
      this.snackBar.open('המשתמש נמחק בהצלחה!!', 'Close', {
      });
    });
  }

  editOrAddUser(id:number){
    this.router.navigate(['/user-details', id]);
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
