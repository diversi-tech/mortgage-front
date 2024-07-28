import { Component } from '@angular/core';
import { ComponentInfo } from '../../shared/Models/componentInfo';
import { loginService } from '../../shared/Services/login.service';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {
  constructor(private loginService:loginService){}
  componentArrayOfCustomer = [
    new ComponentInfo("מסמכים-לקוח", "/customer/document-list", "description"),
    new ComponentInfo('עריכת פרטי לקוח', `/customer/customer-details/${this.loginService.CurrentcustomerId}`, "description"),
    new ComponentInfo('מחשבון משכנתאות', "/customer/calculator", "calculate"),
    new ComponentInfo('מילון עזר למשכנתא',"mortgage-helper","help_outline")
  ];
}