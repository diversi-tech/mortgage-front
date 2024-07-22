import { Component } from '@angular/core';
import { ComponentInfo } from '../../global/Models/componentInfo';
import { NavigationMenuComponent } from '../../shared/navigation-menu/navigation-menu.component';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {
  componentArrayOfCustomer = [
    new ComponentInfo("מסמכים-לקוח", "/customer/document-list", "description"),
    new ComponentInfo('עריכת פרטי לקוח', "/customer/customer-details/", "description"),
    new ComponentInfo('מחשבון משכנתאות', "/customer/calculator", "calculate")
  ];
}
