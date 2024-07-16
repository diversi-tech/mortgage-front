import { Component, OnInit } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { NavigatioMenuToggleService } from '../../Services/navigation-menu-toggle.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ BrowserAnimationsModule, BidiModule,CdkMenu,CdkMenuItem,RouterModule,
    CommonModule,
    CdkMenuTrigger,
    AppRoutingModule
    ,MaterialModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [NavigationMenuComponent]
})


export class ToolbarComponent implements OnInit {
  // isLoggedIn: boolean = false;
  showLogout: boolean = false;
  showMainMenu: boolean = false;
  user: string = 'אורח';

  constructor(private NavigationMenuToggleService: NavigatioMenuToggleService,public authService:AuthService) {  }

  ngOnInit(): void {
    // this.isLoggedIn = false;
    this.NavigationMenuToggleService.toggle();
  }

  loginOrLogout(): void {
    if (this.authService.isLoggedIn()) {
      // after merge with git- call logout function in the AuthService
      //this.user= this.authService.login()        
      this.user = 'אורח'
      // this.isLoggedIn = false;
    }
    else {
      //after merge with git- call login function in the AuthService
      this.user = 'משה שוורץ'
      // this.isLoggedIn = true;
    }
  }
  
  toggleNavigationMenu() {
    console.log("in toggleNavigationMenu"+ this.NavigationMenuToggleService.isOpened());
    this.NavigationMenuToggleService.toggle();
  }
}



