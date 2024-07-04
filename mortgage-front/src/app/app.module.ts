import {  NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from "@angular/router";
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { ExampleComponent } from './Components/example/example.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { LoginComponent } from './Components/login/login.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    ToolbarComponent,
    AppComponent,
    ExampleComponent,
    NavigationMenuComponent
  ],
  imports: [
    LoginComponent,
    BrowserModule,
    AppRoutingModule,
    MaterialModule  ,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }