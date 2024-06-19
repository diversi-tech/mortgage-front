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
      new ComponentInfo("data", "/data", "home"),
      new ComponentInfo("documents", "/doc", "info"),
      new ComponentInfo("login", "/login", "contact_mail"),
      new ComponentInfo("it is really login", "/login", "share"),
    ];
}
