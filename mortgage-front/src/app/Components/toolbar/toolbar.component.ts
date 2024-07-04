import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { NavigatioMenuToggleService } from '../../Services/navigation-menu-toggle.service';
import { isMobile } from 'is-mobile' ;



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [NavigationMenuComponent]
})


export class ToolbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isMob: boolean = false;
  showLogout: boolean = false;
  showMainMenu: boolean = false;
  user: string = 'אורח';

  // constructor(private authService:AuthLoginComponent) {}-variable to call the authService
  constructor(private navigationMenuToggleService: NavigatioMenuToggleService) {
    this.isMob=isMobile();
    console.log(this.isMob);
    
   }


  ngOnInit(): void {
    this.isLoggedIn = false;
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
      this.user = 'משה שוורץ'
      this.isLoggedIn = true;
    }
  }
  toggleNavigationMenu() {
    this.navigationMenuToggleService.toggle();
  }
}



