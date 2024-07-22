import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { LoginComponent } from './Components/login/login.component';
import { MagicLinkComponent } from './Components/magic-link/magic-link.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerDetailModalComponent } from './Components/customer-detail-modal/customer-detail-modal.component';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { LeadComponent } from './Components/lead/lead.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { DocumentTypeDetailsComponent } from './Components/document-type-details/document-type-details.component';
import { DocumentTypeListComponent } from './Components/document-type-list/document-type-list.component';
import { UploadComponent } from './Components/file/file.component';
import { DocumentsListCustomerComponent } from './Components/documents-list-customer/documents-list-customer.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { CustomerPortalComponent } from './Components/customer-portal/customer-portal.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { MortgageCalculatorComponent } from './Components/mortgage-calculator/mortgage-calculator.component';
import { DownloadAccompanyingFormComponent } from './Components/download-accompanying-form/download-accompanying-form.component';
import { MailingListComponent } from './Components/mailing-list/mailing-list.component';
import { ExportToExcelComponent } from './Components/export-customers-to-excel/export-to-excel.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
import { adminChildGuard, userChildGuard } from './Components/auth.guard'; // New import

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'leadLogin/:id', component: LeadComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'customer-portal', component: CustomerPortalComponent, canActivateChild: [userChildGuard], children: [
      { path: 'doc-list', component: DocumentsListCustomerComponent },
      { path: 'leadLogin/:id', component: LeadComponent },
      { path: 'customer-details/:id', component: CustomerDetailModalComponent },
      { path: 'customer-details-modal', component: CustomerDetailModalComponent },
      { path: 'user-details/:id', component: UserDetailComponent },
      { path: 'mortgage-calculator', component: MortgageCalculatorComponent },
    ]
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, canActivateChild: [adminChildGuard], children: [
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'doc', component: UploadComponent },
      { path: 'data', component: DataVisualizationComponent },
      { path: 'doc-list', component: DocumentsListCustomerComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-details/:id', component: UserDetailComponent },
      { path: 'lead-list', component: LeadListComponent },
      { path: 'customer-details-modal', component: CustomerDetailModalComponent },
      { path: 'leadLogin', component: LeadComponent },
      { path: 'documentType-list', component: DocumentTypeListComponent },
      { path: 'customer-details/:id', component: CustomerDetailModalComponent },
      { path: 'lead-details/:id', component: LeadDetailComponent },
      { path: 'documentType-details/:id', component: DocumentTypeDetailsComponent },
      { path: 'exel', component: AdminDashboardComponent },
      { path: 'download/:id', component: DownloadAccompanyingFormComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
