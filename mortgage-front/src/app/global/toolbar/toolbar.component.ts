import { Component, OnInit } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { NavigatioMenuToggleService } from '../../shared/Services/navigation-menu-toggle.service';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [NavigationMenuComponent]
})


export class ToolbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  showLogout: boolean = false;
  showMainMenu: boolean = false;
  user: string = 'אורח';

  constructor(private NavigationMenuToggleService: NavigatioMenuToggleService,private loginservice:loginService) {
    
   }


  ngOnInit(): void {
    this.isLoggedIn = false;
    this.NavigationMenuToggleService.toggle();
  }
  loginOrLogout(): void {
    if (this.isLoggedIn) {
      // after merge with git- call logout function in the AuthService
      //this.user= this.authService.login()        
      this.user = 'אורח'
      this.isLoggedIn = false;
    }
    else {
      //after merge with git- call login function in the AuthService
      this.user = this.loginservice.GetCurrentUser()?.userName!
      this.isLoggedIn = true;
    }
  }
  
  toggleNavigationMenu() {
    this.NavigationMenuToggleService.toggle();
  }
}



