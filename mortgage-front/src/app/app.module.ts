import { NgModule } from '@angular/core';
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
import { BidiModule } from '@angular/cdk/bidi';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { LoginComponent } from './Components/login/login.component';
// import { MatLabelModule } from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input'


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    ToolbarComponent,
    AppComponent,
    ExampleComponent
  ],
  imports: [
    MatInputModule,
    // MatFormField,
    LoginComponent,
    NavigationMenuComponent,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    // MaterialModule  ,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }