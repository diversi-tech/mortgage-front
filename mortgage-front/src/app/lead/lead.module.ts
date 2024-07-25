import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LeadComponent } from './lead/lead.component';
import { LeadRoutingModule } from './lead-routing.module';
import { CustomerModule } from '../customer/customer.module';



@NgModule({
  declarations: [
    LeadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LeadRoutingModule,
    CustomerModule
  ]
})
export class LeadModule { }

