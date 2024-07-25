import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { DocumentsListCustomerComponent } from './documents-list-customer/documents-list-customer.component';
import { UserDetailComponent } from '../shared/user-detail/user-detail.component';
import { LeadDetailComponent } from '../shared/lead-detail-modal/lead-detail-modal.component';
import { CustomerDetailModalComponent } from '../shared/customer-detail-modal/customer-detail-modal.component';
import { DocumentTypeDetailsComponent } from '../shared/document-type-details/document-type-details.component';
import { DocumentTypeListComponent } from '../shared/document-type-list/document-type-list.component';
import { MortgageCalculatorComponent } from '../shared/mortgage-calculator/mortgage-calculator.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
    { path: "", component: CustomerPortalComponent,
        canActivate: [authGuard],
        children:[
        { path: "customer-portal", component: CustomerPortalComponent },
        { path: "document-list", component: DocumentsListCustomerComponent },
        { path: "user-details", component: UserDetailComponent },
        { path: "lead-details", component: LeadDetailComponent },
        { path: "customer-details/:id", component: CustomerDetailModalComponent },
        { path: 'document-type-details', component: DocumentTypeDetailsComponent },
        { path: 'document-type-list', component: DocumentTypeListComponent },
        { path: 'calculator', component: MortgageCalculatorComponent },
    ],
 },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }