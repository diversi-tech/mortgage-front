import { Component } from '@angular/core';
import { AuthService } from '../../Services/login.service';
import { TokenPayload } from '../../Models/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // תוקן ל-styleUrls
})
export class LoginComponent {

  // just example for creating token to an existing user and the decoded:


  // currentToken: string = '';
  // currentUser: TokenPayload | undefined;
  // constructor(private auth: AuthService) {}

  // ngOnInit() {
  //   this.auth.login('brt', '8520').subscribe(token => {
  //     this.currentToken = token;
  //     this.currentUser = this.auth.decodeToken(this.currentToken);
  //     console.log("currentUser:",this.currentUser);
      
  //   });
    
}

