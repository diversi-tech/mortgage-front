import {  NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from "@angular/router";
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { LoginComponent } from './Components/login/login.component';
import { customerService } from './Services/costumer.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { leadService } from './Services/lead.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentsListCustomerService } from './Services/documentListCustomer.service';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LeadComponent } from './Components/lead/lead.component';
import { UserService } from './Services/user.service';
import { FooterComponent } from './Components/footer/footer.component';
import { DocumentTypeDetailsComponent } from './Components/document-type-details/document-type-details.component';
import { DocumentTypeListComponent } from './Components/document-type-list/document-type-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    UserListComponent,
    UserDetailComponent,
    ToolbarComponent,
    FooterComponent,
    DocumentTypeDetailsComponent,
    DocumentTypeListComponent,
    BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,LeadComponent,
    RouterModule, 
    HttpClientModule, MatFormFieldModule, MatInputModule,
    NavigationMenuComponent
    ,CanvasJSAngularChartsModule,BrowserAnimationsModule,
    NavigationMenuComponent, DataVisualizationComponent
    ,CanvasJSAngularChartsModule,LoginComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    customerService, leadService, DocumentsListCustomerService,UserService
  ],
  bootstrap: [AppComponent],
})

  // entryComponents: [Dialog] // ensure your dialog component is listed here
export class AppModule { }