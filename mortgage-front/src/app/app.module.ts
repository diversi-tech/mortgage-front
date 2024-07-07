
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from "@angular/router";
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { ExampleComponent } from './Components/example/example.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { customerService } from './services/costumer.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './material/material.module';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { leadService } from './services/lead.service';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { DocumentsListCustomerService } from './services/documentListCustomer.service';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FooterComponent } from './Components/footer/footer.component';
@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent,
    ExampleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    RouterModule, CommonModule,
    HttpClientModule, MatFormFieldModule, MatInputModule,
    NavigationMenuComponent, DataVisualizationComponent
    ,CanvasJSAngularChartsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    customerService, leadService, DocumentsListCustomerService
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ConfirmDialog] // ensure your dialog component is listed here

})
export class AppModule { }