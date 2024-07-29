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
    // new ComponentInfo("כניסה לאתר", "/login", "login"),
    // new ComponentInfo("לקוחות", "/admin/customer-list", "checklist"),
    new ComponentInfo("לקוחות", "/admin/customer-list", "assignment_ind"),
    new ComponentInfo("לידים", "/admin/lead-list", "groups"),
    new ComponentInfo("משתמשים", "/admin/user-list", "list"),
    // new ComponentInfo(" פרטי לקוח", "/admin/customer-details/", "list"),
    new ComponentInfo("רשימת תפוצה", "/admin/mailing-list/", "send"),
    new ComponentInfo("משימות ללקוח", "/admin/document-list", "done"),
    // new ComponentInfo("עריכת משימות לקוח","/admin/task-edit","edit")

  ];
}
