import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from './Services/auth-login/auth-login.component';
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AuthLoginComponent,
    NavigationMenuComponent,
    UserListComponent,
    // MatIconModule
  ],
  imports: [
    // RouterModule,
    BrowserModule,
    
    MatToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot([]) // כאן יש לוודא שיש import של RouterModule ושיש לו את הקריאה ל- forRoot עם תצורת ניתוב מתאימה
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
