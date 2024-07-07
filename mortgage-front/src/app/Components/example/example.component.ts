import { Component } from '@angular/core';
import { ComponentInfo } from '../../Models/componentInfo';
import { Customer } from '../../Models/Customer';
@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
//Some logic to decide how to initialize the array
componentArray = [
      new ComponentInfo("נתונים", "/data", "data"),
      new ComponentInfo("מסמכים", "/doc", "info"),
      new ComponentInfo("כניסה לאתר", "/login", "contact_mail"),
      new ComponentInfo("רשימת לקוחות", "/customer-list", "list"),
      new ComponentInfo("רשימת לידים", "/lead-list", "list"),
      new ComponentInfo("פרטי לקוח", "/customer-details-modal", "list"),
    ];
    
}
