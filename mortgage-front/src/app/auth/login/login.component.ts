import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { loginService } from '../../shared/Services/login.service';
import { ITokenPayload } from '../../shared/Models/TokenPayload';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // תוקן ל-styleUrls
})
export class LoginComponent {
  loginForm: FormGroup;
  userByToken!: ITokenPayload;
  color:string="rgba(255, 255, 255, 0.553)";
  constructor(private route: ActivatedRoute, private loginService: loginService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\S*$/)]]
    });
    // console.log("customer id current", this.loginService.GetCurrentUser());

  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  //Login function  by entering email and password
  submit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService.login(email, password).subscribe(
        (response:string) => {
          this.loginService.token.next(response); // שמירת הטוקן ב-BehaviorSubject

          this.userByToken = this.loginService.decodeToken(this.loginService.token.getValue()!);
          console.log('what the user and role', this.userByToken, this.userByToken.role);
          // debugger

          if (String(this.userByToken.role) == 'Admin') {
            console.log('admin');
            // sessionStorage.setItem("token", response);
            this.router.navigate(['/admin']);
            console.log('after navigate');
          }
          else if (String(this.userByToken.role) == 'Customer') {
            console.log('customer');
            // sessionStorage.setItem("token", response);
            // console.log(' herere=' + this.loginService.CurrentcustomerId);
            this.loginService.CurrentcustomerId = this.userByToken.customerId;
            this.router.navigate(['/customer']);
          }
        },
        (error: any) => {
          console.log('Login failed', error);
          this.snackBar.open('המשתמש לא קיים במערכת', 'Close', {
            duration: 8000,
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  }
  //Hidden by default
  hidePassword = true;
  //Toggles between hidden and visible state
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  //Password reset function by sending an email to the password reset page
  forgotPassword() {
  if(!this.loginForm.value.email)
    {
       this.snackBar.open('בבקשה תכניס כתובת מייל שלך השמורה במערכת', 'Close', {
      duration: 7000,
    });
    }
  else
   {
    const email = this.loginForm.get('email')!.value;
     this.loginService.resetPassword(email).subscribe(
    (response) => {
      this.snackBar.open('נשלח אימייל לאיפוס הסיסמה שלך', 'Close', {
        duration: 7000,
      })
    },
    (error) => {
      this.snackBar.open('המשתמש לא קיים במערכת. בבקשה נסה שוב.', 'Close', {
        duration: 7000,
      });
      console.log(error);
      //Error printing in specific fields
      console.log(error.error.errors);
    }
  );
}
}
    //send email
   
}