import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { TokenPayload } from '../../Models/Login';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../Models/user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { leadService } from '../../Services/lead.service';
// import { loginService } from '../../services/login.service';
import { response } from 'express';

// import { loginService } from '../../Services/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule,
    // AppRoutingModule
    RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // תוקן ל-styleUrls
})
export class LoginComponent{
  

  loginForm: FormGroup;
  user?:User;

  id: number | null = null;private _loginService: any;
;
  token: string | null = null;
  isNotValid = false;
  //constructor(  private router: Router) { }
  tokenValid: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id']; // Get the 'id' parameter
      this.token = params['token']; // Get the 'token' parameter if needed
      console.log('ID:', this.id);
      console.log('Token:', this.token);
    });
    if (this.id != null) {
      this.leadService.checkToken(this.id).subscribe(
        response => {
          if (response.status === 200) {
            this.router.navigate(['/leadLogin/', this?.id]);
            console.log("hiiii");
          }
          else {
            this.isNotValid = true;
          }
        },
      );
    }
 
  }
  constructor(private route: ActivatedRoute,private leadService: leadService,private fb: FormBuilder,private _auth:AuthService,private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6), Validators.pattern(/^\S*$/)]]
    });
    // this._loginService.isAdmin='login';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    if (this.loginForm.valid) {
  
      console.log('good');
      const { email, password } = this.loginForm.value;
    this._auth.login(email,password).subscribe(
      (response) => {

        
        console.log('Login successful', response);
      // this.user=response;
        const role=this.user?.role;
        console.log('what the user',this.user);
        if(role===0)
        { 
          console.log('admin'); 
        
         this.router.navigate(['/admin-dashboard']);
        this._loginService.isAdmin='admin';
         this.router.navigate(['/admin-dashboard']);
        } 
        else  {
          console.log('customer');
          this.router.navigate(['/customer-portal']);
        }
      },
      (error: any) => {
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
  hidePassword = true; // מוסתר כברירת מחדל
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; // מתחלף בין מצב מוסתר לגלוי
  }
  forgotPassword() {
  // כאן תוכל להוסיף לוגיקה לשליחת קישור לשכחת סיסמה
  this._loginService.
  console.log('Forgot password clicked');
  // this.router.navigate(['/forgot-password']);
  // לדוגמה, תוכל להפנות לדף אחר או להציג הודעה
}

}