import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { MagicLinkComponent } from './Components/magic-link/magic-link.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerDetailModalComponent } from './Components/customer-detail-modal/customer-detail-modal.component';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
import { LeadComponent } from './Components/lead/lead.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { DocumentTypeDetailsComponent } from './Components/document-type-details/document-type-details.component';
import { DocumentTypeListComponent } from './Components/document-type-list/document-type-list.component';
import { UploadComponent } from './Components/file-upload/file-upload.component';

import { DocumentsListCustomerComponent } from './Components/documents-list-customer/documents-list-customer.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';


const routes: Routes =
  [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // ניתוב ברירת מחדל
    { path: 'exel', component: AdminDashboardComponent },
    { path: 'data', component: DataVisualizationComponent },
    { path: 'doc-list', component: DocumentsListCustomerComponent },
    { path: 'doc', component: UploadComponent },
    { path: 'login', component: LoginComponent },
    { path: 'magic-link', component: MagicLinkComponent },
    { path: 'customer-list', component: CustomerListComponent },
    { path: 'lead-list', component: LeadListComponent },
    { path: 'customer-details/:id', component: CustomerDetailModalComponent },
    { path: 'lead-tetails/:id', component: LeadDetailComponent },
    { path: 'leadLogin', component: LeadComponent },
    { path: 'lead-details/:id', component: LeadDetailComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'user-details/:id', component: UserDetailComponent },
    { path: 'customer-details-modal', component: CustomerDetailModalComponent },
    { path: 'documentType-details/:id', component: DocumentTypeDetailsComponent },
    { path: 'documentType-list', component: DocumentTypeListComponent },
    { path: 'user-details', component: UserDetailComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent,children:[
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'doc', component: UploadComponent },
      { path: 'data', component: DataVisualizationComponent },
      { path: 'doc-list', component: DocumentsListCustomerComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'lead-list', component: LeadListComponent },
      { path: 'customer-details-modal', component: CustomerDetailModalComponent },
      { path: 'leadLogin', component: LeadComponent },
      { path: 'documentType-list', component: DocumentTypeListComponent },
      { path: 'lead-tetails/:id', component: LeadDetailComponent },
    ] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*    new ComponentInfo("נתונים", "/data", "timeline"),
    new ComponentInfo("מסמכים", "/doc", "description"),
    // new ComponentInfo("מסמכים-לקוח", "/doc-list", "description"),
    new ComponentInfo("כניסה לאתר", "/login", "login"),
    new ComponentInfo("רשימת לקוחות", "/admin-dashboard/customer-list", "checklist"),
    new ComponentInfo("רשימת לידים", "/lead-list", "list"),
    new ComponentInfo("רשימת משתמשים", "/user-list", "list"),
    new ComponentInfo(" פרטי לקוח", "/customer-details-modal", "list"),
    // new ComponentInfo("כניסת לידים", "/leadLogin", "login"),
    new ComponentInfo("רשימת מסמכים","/documentType-list","score"), */