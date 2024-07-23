import { Component } from '@angular/core';
import { IComponentInfo } from '../../Models/componentInfo';
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
    new IComponentInfo("מסמכים-לקוח", "/customer-portal/doc-list", "description"),
    new IComponentInfo("כניסה לאתר", "/login", "login"),
    new IComponentInfo("כניסת לידים", "/leadLogin", "login"),
    new IComponentInfo('עריכת פרטי לקוח', "/customer-portal/customer-details","description")
 ];   
}
