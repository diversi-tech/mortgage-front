import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalculatorComponent } from '../shared/mortgage-calculator/mortgage-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UserDetailComponent } from '../shared/user-detail/user-detail.component';
import { LeadDetailComponent } from '../shared/lead-detail-modal/lead-detail-modal.component';
import { DocumentTypeListComponent } from '../shared/document-type-list/document-type-list.component';
import { DocumentTypeDetailsComponent } from '../shared/document-type-details/document-type-details.component';
import { CustomerDetailModalComponent } from '../shared/customer-detail-modal/customer-detail-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { CustomerModule } from '../customer/customer.module';
import { NotificationsComponent } from '../customer/notifications/notifications.component';
import { AccessibilityMenuComponent } from './accessibility-menu/accessibility-menu.component';

//import { NotificationsComponent } from '../customer/notifications/notifications.component';
//import { CustomerModule } from '../customer/customer.module';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    FooterComponent,
    ToolbarComponent,
    NavigationMenuComponent,
    AccessibilityMenuComponent,
    //NotificationsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  exports: [
    ConfirmDialogComponent,
    FooterComponent,
    ToolbarComponent,
    NavigationMenuComponent,
    AccessibilityMenuComponent
   // NotificationsComponent
  ]
})
export class GlobalModule { }
