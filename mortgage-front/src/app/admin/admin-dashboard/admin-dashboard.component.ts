import { Component, } from '@angular/core';
import { IComponentInfo } from '../../shared/Models/ComponentInfo';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  componentArrayOfAdmin = [
    new IComponentInfo("נתונים", "/admin/data-visualization", "timeline"),
    new IComponentInfo("מסמכים", "/admin/document-type-list", "description"),
    new IComponentInfo("כניסה לאתר", "/login", "login"),
    new IComponentInfo("רשימת לקוחות", "/admin/customer-list", "checklist"),
    new IComponentInfo("רשימת לידים", "/admin/lead-list", "list"),
    new IComponentInfo("רשימת משתמשים", "/admin/user-list", "list"),
    new IComponentInfo(" פרטי לקוח", "/admin/customer-details/", "list"),
    // new ComponentInfo("שליחת הודעה","/admin/send-notification/:id","send")
    new IComponentInfo("שליחת הודעה","/admin/send-notification/","send"),
    new IComponentInfo("רשימת תפוצה","/admin/mailing-list/","send")

  ];
}
