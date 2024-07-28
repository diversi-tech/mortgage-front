import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { NavigationMenuComponent } from '../global/navigation-menu/navigation-menu.component';
import { DocumentsListCustomerComponent } from './documents-list-customer/documents-list-customer.component';
import { ExportToExcelComponent } from '../admin/export-customers-to-excel/export-to-excel.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { GlobalModule } from '../global/global.module';
import { MortgageHelperComponent } from './mortgage-helper/mortgage-helper.component';



@NgModule({
  declarations: [
    CustomerPortalComponent,
    DocumentsListCustomerComponent,
    MortgageHelperComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //Local modules
    GlobalModule,
    CustomerRoutingModule
  ],
  exports:[CustomerPortalComponent,
    DocumentsListCustomerComponent
    
  ]
})
export class CustomerModule { }
