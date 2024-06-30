import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './Components/user-list/user-list.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatDrawerContent } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from './Components/login/login.component';
import{MatFormFieldModule}from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './Components/user-detail/user-detail.component'; // Import HttpClientModule



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserListComponent,
    NavigationMenuComponent,
    UserListComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule,
    BrowserModule,
     MatIconModule,
     MatMenuModule,
     MatDrawerContent,
     BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
