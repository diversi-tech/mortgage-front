import { Component, OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
import { AuthLoginComponent } from 'app/Services/auth-login/auth-login.component';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers:[AuthLoginComponent,NavigationMenuComponent]
})


export class ToolbarComponent implements OnInit {
  @ViewChild('menuContainer', { read: ViewContainerRef }) menuContainer!: ViewContainerRef;

  isLoggedIn: boolean = false;
  showLogout: boolean = false;
  showMainMenu: boolean = false;
  user:string='אורח';

  constructor(private authService:  AuthLoginComponent,private navigationMenu:NavigationMenuComponent,private resolver: ComponentFactoryResolver) {}

  // קריאת שרת ע"י:!!
// httpClient


  //!!!!!! יוזרלוגין לדוגמא
  userLogin(): string {

    return this.user; // דוגמה פשוטה
}
  ngOnInit(): void {
    this.isLoggedIn = false;
  }
  login(): void {
    // קריאה לקומפוננטת הלוגין של הסרביס
    // this.authService.login()

    // !!!!!!!!! דוגמא לבדיקה
    //קריאה לקומפוננטת יוזרלוגין
    this.user=this.userLogin();
    this.user='משה שוורץ'
    this.isLoggedIn=true;
    // Handle login functionality
  }
  logout(): void {
    // קריאה לקומפוננטת לוגאאוט
    this.user='אורח'
    this.isLoggedIn=false;
  }

  // צריך לקרוא לקומפוננטה של התפריט הראשי
  openMainMenu(): void {
    this.menuContainer.clear(); // למחוק תוכן קודם אם יש
    const factory = this.resolver.resolveComponentFactory(NavigationMenuComponent);
    const componentRef = this.menuContainer.createComponent(factory);  }
}


// תרשים זרימה
// וכל פעם לחזור על התרשים הזרימה 
// לעשות עיגול ,
// איפה הדאטה נכנס מאיפה יוצא 