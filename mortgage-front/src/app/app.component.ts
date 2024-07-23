import { Component } from '@angular/core';
import { AuthService } from './shared/Services/auth.service';
import { NavigatioMenuToggleService } from './shared/Services/navigation-menu-toggle.service';
import { UiStateService } from './shared/Services/uiState.service';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent  {
  constructor(public loginService:AuthService,public navigationMenuService: NavigatioMenuToggleService,private uiStateService: UiStateService) { 
  }
  get showGeneral(): boolean {
    return this.uiStateService.showGeneral;
}

  title = 'mortgage-client';
  
}





