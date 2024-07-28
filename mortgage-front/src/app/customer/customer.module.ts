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
import { CustomerUpdateDetailesComponent } from './customer-update-detailes/customer-update-detailes.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerPortalComponent,
    DocumentsListCustomerComponent,
    MortgageHelperComponent,
    CustomerUpdateDetailesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //Local modules
    GlobalModule,
    CustomerRoutingModule,
    RouterModule
  ],
  exports:[CustomerPortalComponent,
    DocumentsListCustomerComponent
    
  ]
})
export class CustomerModule { }
