import { Component} from '@angular/core';
import { IComponentInfo } from '../../Models/componentInfo';
import { NavigationMenuComponent } from "../navigation-menu/navigation-menu.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavigationMenuComponent, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  constructor() { }
  componentArrayOfAdmin = [
    new IComponentInfo("נתונים", "/admin-dashboard/data", "timeline"),
    new IComponentInfo("מסמכים", "/admin-dashboard/doc", "description"),
    new IComponentInfo("כניסה לאתר", "/login", "login"),
    new IComponentInfo("רשימת לקוחות", "/admin-dashboard/customer-list", "checklist"),
    new IComponentInfo("רשימת לידים", "/admin-dashboard/lead-list", "list"),
    new IComponentInfo("רשימת משתמשים", "/admin-dashboard/user-list", "list"),
    new IComponentInfo(" פרטי לקוח", "/admin-dashboard/customer-details-modal", "list"),
    new IComponentInfo("רשימת מסמכים","/admin-dashboard/documentType-list","score"),
  ];
}
