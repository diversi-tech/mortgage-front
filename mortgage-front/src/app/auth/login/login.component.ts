import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../global/Models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { leadService } from '../../global/Services/lead.service';
import { AuthService } from '../../global/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // תוקן ל-styleUrls
})
export class LoginComponent {


  loginForm: FormGroup;
  user?: User;
  id: number | null = null; private _loginService: any;
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
  constructor(private route: ActivatedRoute, private leadService: leadService, private fb: FormBuilder, private _auth: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\S*$/)]]
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
      this._auth.login(email, password).subscribe(
        (response) => {


          console.log('Login successful', response);
          this.user=this._auth.decodeToken(response);
          console.log('what the user', this.user," type="+typeof(this.user.role));
          if (String(this.user.role) == "Admin") {
            console.log('admin');
            sessionStorage.setItem('token',response);
            this.router.navigate(['/admin']);
          }
          else  if(String(this.user.role)=="Customer") {
            console.log('customer');
            sessionStorage.setItem('token',response);
            this.router.navigate(['/customer']);
          }
        },
        (error: any) => {
          console.log
            ('Login failed', error);
          this.snackBar.open('המשתמש לא קיים במערכת', 'Close', {
            duration: 6000,
            panelClass: ['error-snackbar']
          });
        }
      );

    }
  }
  hidePassword = true; // default is hidden
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  forgotPassword() {
    this._loginService.
      console.log('Forgot password clicked');
    // this.router.navigate(['/forgot-password']);
  }

}