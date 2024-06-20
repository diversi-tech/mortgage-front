import { Component } from '@angular/core';
import { ComponentInfo } from '../../Models/componentInfo';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
//Some logic to decide how to initialize the array
componentArray = [
      new ComponentInfo("נתונים", "/data", "home"),
      new ComponentInfo("מסמכים", "/doc", "info"),
      new ComponentInfo("כניסה לאתר", "/login", "contact_mail"),
      new ComponentInfo("בלה בלה", "/login", "share"),
    ];
}
