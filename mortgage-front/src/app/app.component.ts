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
    new ComponentInfo("נתונים", "/data", "home"),
    new ComponentInfo("מסמכים", "/doc", "info"),
    new ComponentInfo("כניסה לאתר", "/login", "contact_mail"),
    new ComponentInfo("בלה בלה", "/login", "share"),
  ];
  title = 'mortgage-client';
}
