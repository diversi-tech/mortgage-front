import { Component} from '@angular/core';
import { NavigatioMenuToggleService } from './Services/navigation-menu-toggle.service';
import{UserListService} from './Services/user-list.service'
import { IUser } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public navigationMenuService: NavigatioMenuToggleService,private userListService:UserListService) {}

  title = 'mortgage-client';
}
