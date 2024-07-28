import { Component } from '@angular/core';
import { IComponentInfo } from '../../shared/Models/ComponentInfo';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {
  constructor(private loginService:loginService){}
  componentArrayOfCustomer = [
    new IComponentInfo("מסמכים-לקוח", "/customer/document-list", "description"),
    new IComponentInfo('עריכת פרטי לקוח', `/customer/customer-details/${this.loginService.CurrentcustomerId}`, "description"),
    new IComponentInfo('מחשבון משכנתאות', "/customer/calculator", "calculate"),
    new IComponentInfo('מילון עזר למשכנתא',"mortgage-helper","help_outline")
  ];
}