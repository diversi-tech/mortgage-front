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
import { customerService } from './services/costumer.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { leadService } from './services/lead.service';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
import { DocumentsListCustomerService } from './services/documentListCustomer.service';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    ToolbarComponent,
    AppComponent,
    ExampleComponent
  ],

  imports: [
    BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    RouterModule, CommonModule,
    HttpClientModule, MatFormFieldModule, MatInputModule,
    NavigationMenuComponent, DataVisualizationComponent
    ,CanvasJSAngularChartsModule,LoginComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    customerService, leadService, DocumentsListCustomerService
  ],
  bootstrap: [AppComponent],
})

  // entryComponents: [ConfirmDialog] // ensure your dialog component is listed here
export class AppModule { }