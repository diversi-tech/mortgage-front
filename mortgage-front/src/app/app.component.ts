import { Component, OnInit } from '@angular/core';
// import { ComponentInfo } from './Models/componentInfo';
// import { NavigatioMenuToggleService } from './Services/navigation-menu-toggle.service';
// import { Router } from '@angular/router';
import { loginService } from './Services/login.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent  {
  constructor(public loginService:loginService) { 
  }
  // componentArray = [
  //   new ComponentInfo("נתונים", "/data", "timeline"),
  //   new ComponentInfo("מסמכים", "/doc", "description"),
  //   new ComponentInfo("מסמכים-לקוח", "/doc-list", "description"),
  //   new ComponentInfo("כניסה לאתר", "/login", "login"),
  //   new ComponentInfo("רשימת לקוחות", "/customer-list", "checklist"),
  //   new ComponentInfo("רשימת לידים", "/lead-list", "list"),
  //   new ComponentInfo("רשימת משתמשים", "/user-list", "list"),
  //   //new ComponentInfo(" פרטי לקוח", "/customer-details-modal", "list"),
  //   new ComponentInfo("כניסת לידים", "/leadLogin", "login"),
  //   new ComponentInfo("רשימת מסמכים","/documentType-list","score"),
  //   new ComponentInfo("ייצוא לאקסל",'exel',"save")
  // ];
  title = 'mortgage-client';
}





