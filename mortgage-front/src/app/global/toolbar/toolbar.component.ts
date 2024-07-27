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
  constructor(private NavigationMenuToggleService: NavigatioMenuToggleService,public loginservice:loginService) {  }

  ngOnInit(): void {
    this.NavigationMenuToggleService.toggle();
  }
  
  toggleNavigationMenu() {
    this.NavigationMenuToggleService.toggle();
  }
}



