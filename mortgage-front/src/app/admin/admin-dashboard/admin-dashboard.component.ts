import { Component, } from '@angular/core';
import { IComponentInfo } from '../../shared/Models/componentInfo';
// import { IComponentInfo } from '../../shared/Models/ComponentInfo';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  componentArrayOfAdmin = [
    new IComponentInfo("לידים", "/admin/lead-list", "groups"),
    new IComponentInfo("לקוחות", "/admin/customer-list", "assignment_ind"),
    new IComponentInfo("משימות ללקוח", "/admin/document-list", "done"),
    new IComponentInfo("סוגי מסמכים", "/admin/document-type-list", "description"),
    new IComponentInfo("רשימת תפוצה", "/admin/mailing-list/", "send"),
    new IComponentInfo("משתמשים", "/admin/user-list", "list"),
    new IComponentInfo("גרף נתונים", "/admin/data-visualization", "timeline"),
  ];
}
