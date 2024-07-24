import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { LeadDetailComponent } from './lead-detail-modal/lead-detail-modal.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DocumentTypeListComponent } from './document-type-list/document-type-list.component';
import { DocumentTypeDetailsComponent } from './document-type-details/document-type-details.component';
import { CustomerDetailModalComponent } from './customer-detail-modal/customer-detail-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerExcelComponent } from '../admin/customer-excel/customer-excel.component';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [
    MortgageCalculatorComponent,
    UserDetailComponent,
    LeadDetailComponent,
    DocumentTypeListComponent,
    DocumentTypeDetailsComponent,
    CustomerDetailModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminModule

  ],
  exports:[
    MortgageCalculatorComponent,
    UserDetailComponent,
    LeadDetailComponent,
    DocumentTypeListComponent,
    DocumentTypeDetailsComponent,
    CustomerDetailModalComponent
  ]
})
export class SharedModule { }
