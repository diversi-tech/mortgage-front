
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { isDate } from 'util/types';
import { Role  } from '../Models/User';
import { UserService } from '../Services/user.service';
import { IUser } from '../Models/User';
 
 
@Component({
  selector: 'app-user-detail',
  standalone:true,
  imports:[MaterialModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
 
  export class UserDetailComponent implements OnInit {
    userForm: FormGroup;
    userId: number | undefined;
    user!: IUser;
    roles = ['מנהל מערכת', 'לקוח'];
    formattedCreatedAt: string=''; 
    formattedUpdatedAt: string=''; 
  
    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService
    ) {
      this.userForm = this.fb.group({
       userName:  ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', [Validators.required, Validators.email]],
        role: ['Admin', [Validators.required,Validators.pattern(/['מנהל מערכת'].*['לקוח']/)]],
        created_at: [{ value: '', disabled: true }],
        updated_at: [{ value: '', disabled: true }]
      });
    }
 
       ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.userId = +params['id'];
            if (this.userId !== -1) {
       
            this.getUserById(this.userId);
         }
        });
    }

    getUserById(id: number): void {  
      this.userService.getUserById(id).subscribe((user: IUser ) => {      
          this.user = user;      
          if (this.user) {        
              if (this.user.created_at) {
                const createdAtDate = new Date(this.user.created_at);
                this.formattedCreatedAt = `${createdAtDate.getDate()}-${String(createdAtDate.getMonth() + 1).padStart(2, '0')}-${String(createdAtDate.getFullYear()).padStart(2, '0')}`;
            }  
                       
            if (this.user.updated_at) {
              const updatedAtDate = new Date(this.user.updated_at);
              this.formattedUpdatedAt = `${updatedAtDate.getDate()}-${String(updatedAtDate.getMonth() + 1).padStart(2, '0')}-${String(updatedAtDate.getFullYear()).padStart(2, '0')}`;
            }
            
              if (this.user.role !== undefined) {
          
                  const userRole = this.roles.indexOf(Role[this.user.role]);
                  if (userRole) {                 
                     this.user.role = userRole as unknown as Role;
                  
                    this.userForm.patchValue({
                      created_at: this.user.created_at,
                      updated_at: this.user.updated_at
                  });
                      this.userForm.patchValue(this.user);       
                  } else {
                    
                      this.userForm.patchValue(this.user);  
                    }
              }}
        });     
    }
  
  onEmailInput() {
    const emailValue = this.userForm.get('email')?.value;
    this.userForm.patchValue({ userName: emailValue });
  }
  
  saveUser() {
    if (this.userForm.valid) {
      const updatedUser: IUser = this.userForm.value;
      updatedUser.id = this.user!.id;
      updatedUser.created_at = this.user!.created_at;
      updatedUser.userName = updatedUser.email
      updatedUser.updated_at = new Date(); 
      updatedUser.role = this.userForm.value.role === 'מנהל מערכת' ? Role.Admin : Role.Customer;
 
      if (this.userId === -1) {
        this.userService.addUser(updatedUser).subscribe({
          next: () => {
            this.router.navigate(['/user-list']);
          },
        }); 
      } else {
        this.userService.updateUser(updatedUser).subscribe({
          next: (response) => {          
            this.router.navigate(['/user-list']);
          },
        });
      }
    }
  }
     
      cancel(): void {
        this.router.navigate(['/user-list']);
      }
    }

