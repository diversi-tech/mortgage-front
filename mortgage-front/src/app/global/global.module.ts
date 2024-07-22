import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LeadDetailComponent } from './lead-detail-modal/lead-detail-modal.component';
import { DocumentTypeListComponent } from './document-type-list/document-type-list.component';
import { DocumentTypeDetailsComponent } from './document-type-details/document-type-details.component';
import { CustomerDetailModalComponent } from './customer-detail-modal/customer-detail-modal.component';



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
    // MatSelectModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatIconModule,
    // HttpClientModule,
    // MatTooltipModule
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
export class GlobalModule { }
