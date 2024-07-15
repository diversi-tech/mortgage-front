import { Component } from '@angular/core';
import { ComponentInfo } from '../../Models/componentInfo';
import { NavigationMenuComponent } from "../navigation-menu/navigation-menu.component";

@Component({
  selector: 'app-customer-portal',
  standalone: true,
  imports: [NavigationMenuComponent],
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {
  constructor() {
    console.log("in ");
  }
  componentArrayOfCustomer = [
    new ComponentInfo("מסמכים-לקוח", "/doc-list", "description"),
    new ComponentInfo("כניסה לאתר", "/login", "login"),
    new ComponentInfo("כניסת לידים", "/leadLogin", "login"),
    new ComponentInfo('עריכת פרטי לקוח', "/customer-details/","description")
 ];   
}
