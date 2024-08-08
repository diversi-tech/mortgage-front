import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { loginService } from '../../shared/Services/login.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  forgotPasswordForm:FormGroup;
  user:any={};
  id!:number;
  constructor(private fb: FormBuilder,private loginService:loginService,private snackBar:MatSnackBar,private route: ActivatedRoute,private router: Router) {
        this.forgotPasswordForm = this.fb.group({
      newPassword: [ '', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-/'.,><_=^#])[A-Za-z\d@$!%*?&]{6,}$/)
        ]
      ],
      confirmPassword: ['', Validators.required]
    }, { validator: this.mustMatch('newPassword', 'confirmPassword') });


  
    
  }

  ngOnInit(): void {
    //Extract ID from URL
    const Userid= this.route.snapshot.paramMap.get('id');
    if (Userid) {
         this.id =+Userid;
         console.log("Userid",this.id);
    }
    else{
      console.log("cant take id from url");
    }
  }
  get newPassword() {
    return this.forgotPasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.forgotPasswordForm.get('confirmPassword');
  }
  //Compatibility check function between the two passwords
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  //Confirm function and save the new password and go to the login page
  submit(): void {
    if (this.forgotPasswordForm.valid) {
      const newPassword1=this.forgotPasswordForm.get('newPassword')!.value;
      this.loginService.updatePassword(newPassword1,this.id).subscribe(
       (response)  => {
          console.log("response from put",response);
          this.snackBar.open('הסיסמה עודכנה בהצלחה', 'Close', {
            duration: 5000,
          });
        this.router.navigate(['/auth/login']);
        },
        (error) => {
          this.snackBar.open('Failed to update password. Please try again.', 'Close', {
            duration: 5000,
          });
          console.log(error);
        //Error printing in specific fields
          console.log(error.error.errors);
        }
      );
    }
  }
}