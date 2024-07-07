import { Component} from '@angular/core';
import { NavigatioMenuToggleService } from './Services/navigation-menu-toggle.service';
import { ComponentInfo } from './Models/componentInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public navigationMenuService: NavigatioMenuToggleService) {}

  componentArray = [
    new ComponentInfo("נתונים", "/data", "timeline"),
    new ComponentInfo("מסמכים", "/doc", "description"),
    new ComponentInfo("כניסה לאתר", "/login", "login"),
    new ComponentInfo("רשימת לקוחות", "/customer-list", "checklist"),
    new ComponentInfo("רשימת לידים", "/lead-list", "list"),
    new ComponentInfo("רשימת משתמשים", "/user-list", "list")
  ];
  
  title = 'mortgage-client';
}





