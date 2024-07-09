// src/app/Components/user-list/user-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../Models/user';
import { Role, User } from '../../Models/User';

import { UserListService } from '../../Services/user-list.service';
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

  constructor(private userListService: UserListService) {  }

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

  deleteUser(id: number) {
    this.userListService.deleteUserById(id).subscribe(() => {
      this.users$.data = this.users$.data.filter(user => user.id !== id);
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
