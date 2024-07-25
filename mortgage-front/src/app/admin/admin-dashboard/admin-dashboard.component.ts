import { Component, } from '@angular/core';
import { ComponentInfo } from '../../shared/Models/componentInfo';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  componentArrayOfAdmin = [
    new ComponentInfo("נתונים", "/admin/data-visualization", "timeline"),
    new ComponentInfo("מסמכים", "/admin/document-type-list", "description"),
    new ComponentInfo("כניסה לאתר", "/login", "login"),
    new ComponentInfo("רשימת לקוחות", "/admin/customer-list", "checklist"),
    new ComponentInfo("רשימת לידים", "/admin/lead-list", "list"),
    new ComponentInfo("רשימת משתמשים", "/admin/user-list", "list"),
    new ComponentInfo(" פרטי לקוח", "/admin/customer-details/", "list"),
    // new ComponentInfo("שליחת הודעה","/admin/send-notification/:id","send")
    new ComponentInfo("שליחת הודעה","/admin/send-notification/","send")

  ];
}
