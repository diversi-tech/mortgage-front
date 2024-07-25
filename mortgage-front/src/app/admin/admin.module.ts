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
import { GlobalModule } from '../global/global.module';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { CustomerExcelComponent } from './customer-excel/customer-excel.component';



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
    UserListComponent,
    SendNotificationComponent,
    EditDialogComponent,
    UserListComponent,
    CustomerExcelComponent
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
     GlobalModule
  ],
  exports:[
    CustomerExcelComponent
  ]

})
export class AdminModule { }
