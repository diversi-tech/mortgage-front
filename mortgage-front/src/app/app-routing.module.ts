import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { MagicLinkComponent } from './Components/magic-link/magic-link.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerDetailModalComponent } from './Components/customer-detail-modal/customer-detail-modal.component';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
// import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
import { LeadComponent } from './Components/lead/lead.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { DocumentTypeDetailsComponent } from './Components/document-type-details/document-type-details.component';
import { DocumentTypeListComponent } from './Components/document-type-list/document-type-list.component';
import { UploadComponent } from './Components/file-upload/file-upload.component';
import { DocumentsListCustomerComponent } from './Components/documents-list-customer/documents-list-customer.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { MailingListComponent } from './Components/mailing-list/mailing-list.component';
import { ExportToExcelComponent } from './Components/export-to-excel/export-to-excel.component';
import { authGuard, authGuardAdmin } from './Components/auth.guard';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes =
  [
    {path:'exel',component:ExportToExcelComponent, canActivate: [authGuardAdmin]},
    { path: 'data', component: DataVisualizationComponent , canActivate: [authGuardAdmin]},
    {path:'doc-list',component:DocumentsListCustomerComponent, canActivate: [authGuardAdmin]},
    { path: 'doc', component: UploadComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'magic-link', component: MagicLinkComponent , canActivate: [authGuardAdmin]},
    {path: 'customer-list', component: CustomerListComponent , canActivate: [authGuardAdmin]},
    {path:'lead-list',component:LeadListComponent, canActivate: [authGuardAdmin]},
    {path:'customer-details/:id',component:CustomerDetailModalComponent, canActivate: [authGuard]},
    // {path:'lead-tetails/:id',component:LeadDetailComponent, canActivate: [authGuardAdmin]},
    {path:'leadLogin',component:LeadComponent},
    {path:'user-list',component:UserListComponent, canActivate: [authGuardAdmin]}, 
    {path:'user-details/:id',component:UserDetailComponent, canActivate: [authGuardAdmin]},
    {path:'customer-details-modal',component:CustomerDetailModalComponent, canActivate: [authGuardAdmin]},
    {path:'documentType-details/:id',component:DocumentTypeDetailsComponent, canActivate: [authGuardAdmin]},
    {path:'documentType-list',component:DocumentTypeListComponent, canActivate: [authGuardAdmin]},
    {path:'user-details',component:UserDetailComponent, canActivate: [authGuardAdmin]},
    {path:'mailing-list',component:MailingListComponent, canActivate: [authGuardAdmin]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
