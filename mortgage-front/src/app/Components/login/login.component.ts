import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../Models/user';
import { loginService } from '../../services/login.service';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule,
// AppRoutingModule
RouterModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  user?:User;

  constructor(private fb: FormBuilder,private _loginService:loginService,private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6), Validators.pattern(/^\S*$/)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  submit() {
  
    
    //     this._loginService.login(email,password).subscribe(
    //       (response: User) => {
    //         this.user = response;
    //         console.log('Login successful:', response);
    //       },
    //       (error) => {
    //         console.error('Login failed:', error);
    //       }
    //     )
    //   }
    if (this.loginForm.valid) {
      
      console.log('good');
      const { email, password } = this.loginForm.value;
    this._loginService.login(email,password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.user = response;
        const role=this.user?.role;
        console.log('what the user',this.user);
        if(role===0)
        { 
          console.log('admin'); 
        
         this.router.navigate(['/admin-dashboard']);
        } 
        else  {
          console.log('customer');}
      },
      (error) => {
        console.log
        ('Login failed', error);
        this.snackBar.open('המשתמש לא קיים במערכת', 'Close', {
          duration: 6000, // זמן התצוגה של ההודעה במילישניות
          panelClass: ['error-snackbar'] // מחלקת CSS מותאמת אישית להודעה
        });
      }
    );

    }
  }
}