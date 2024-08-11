import { Component } from '@angular/core';
import { IComponentInfo } from '../../shared/Models/componentInfo';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {
  constructor(private loginService:loginService){}
  componentArrayOfCustomer = [
    new IComponentInfo("מסמכים", `/customer/document-list/${this.loginService.GetCurrentUser().customerId}`, "real_estate_agent"),
    new IComponentInfo('פרטים אישיים', `/customer/customer-details/${this.loginService.GetCurrentUser().customerId}`, "description"),
    new IComponentInfo('מחשבון משכנתאות', "/customer/calculator", "calculate"),
    new IComponentInfo('מילון עזר למשכנתא',"mortgage-helper","help_outline"),
    new IComponentInfo('התראות', `/customer/notifications/${this.loginService.GetCurrentUser().customerId}`, "notifications"),

  ];
}