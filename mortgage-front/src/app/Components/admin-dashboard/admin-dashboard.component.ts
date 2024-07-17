import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';  // ייבוא נכון של file-saver
import { customerService } from '../../Services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { Customer, Customer_type } from '../../Models/Customer';
import { ComponentInfo } from '../../Models/componentInfo';
import { NavigationMenuComponent } from "../navigation-menu/navigation-menu.component";
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
// import { ToolbarComponent } from "../toolbar/toolbar.component";
// import { FooterComponent } from "../footer/footer.component";
// import { ToolbarComponent } from "../toolbar/toolbar.component";
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavigationMenuComponent, RouterModule
    //  ToolbarComponent
    ,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  constructor() {
    console.log("in AdminDashboardComponent");
  }
  componentArrayOfAdmin = [
    new ComponentInfo("נתונים", "data", "timeline"),
    new ComponentInfo("מסמכים", "/doc", "description"),
    // new ComponentInfo("מסמכים-לקוח", "/doc-list", "description"),
    new ComponentInfo("כניסה לאתר", "/login", "login"),
    new ComponentInfo("רשימת לקוחות", "/customer-list", "checklist"),
    new ComponentInfo("רשימת לידים", "/lead-list", "list"),
    new ComponentInfo("רשימת משתמשים", "/user-list", "list"),
    new ComponentInfo(" פרטי לקוח", "/customer-details-modal", "list"),
    // new ComponentInfo("כניסת לידים", "/leadLogin", "login"),
    new ComponentInfo("רשימת מסמכים","/documentType-list","score"),
  ];
}
