import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { UserListComponent } from './user-list/user-list.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { UserDetailComponent } from '../shared/user-detail/user-detail.component';
import { LeadDetailComponent } from '../shared/lead-detail-modal/lead-detail-modal.component';
import { CustomerDetailModalComponent } from '../shared/customer-detail-modal/customer-detail-modal.component';
import { DocumentTypeDetailsComponent } from '../shared/document-type-details/document-type-details.component';
import { DocumentTypeListComponent } from '../shared/document-type-list/document-type-list.component';
import { MortgageCalculatorComponent } from '../shared/mortgage-calculator/mortgage-calculator.component';
import { authGuardAdmin } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '', component: AdminDashboardComponent,
        canActivate: [authGuardAdmin],
        children: [
            { path: 'customer-list', component: CustomerListComponent },
            { path: 'user-list', component: UserListComponent },
            { path: 'lead-list', component: LeadListComponent },
            { path: 'data-visualization', component: DataVisualizationComponent },
            { path: "user-details/:id", component: UserDetailComponent },
            { path: "lead-details", component: LeadDetailComponent },
            { path: "customer-details/:id", component: CustomerDetailModalComponent },
            { path: 'document-type-details', component: DocumentTypeDetailsComponent },
            { path: 'document-type-list', component: DocumentTypeListComponent },
            { path: 'calculator', component: MortgageCalculatorComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}