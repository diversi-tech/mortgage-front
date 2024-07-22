import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ExportToExcelComponent } from './export-customers-to-excel/export-to-excel.component';
import { DownloadAccompanyingFormComponent } from './download-accompanying-form/download-accompanying-form.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LeadListComponent } from './lead-list/lead-list.component';
import { SharedModule } from '../shared/shared.module';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './file/file.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerListComponent,
    LeadListComponent,
    ExportToExcelComponent,
    DownloadAccompanyingFormComponent,
    DataVisualizationComponent,
    FileComponent,
    MailingListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
     RouterModule,
     MaterialModule,
     CanvasJSAngularChartsModule,
     FormsModule,
     ReactiveFormsModule,
     //Local modules
     AdminRoutingModule,
     SharedModule
  ],

})
export class AdminModule { }
