import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // default route
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'lead', loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule) },
  { path: '**', component:PageNotFoundComponent } ,// route in error case

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









/*

const routes: Routes =
  [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // ניתוב ברירת מחדל
    { path: 'login', component: LoginComponent },
    { path: 'leadLogin/:id', component: LeadComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    // { path: 'exel', component: AdminDashboardComponent },
    // { path: 'data', component: DataVisualizationComponent },
    // { path: 'doc-list', component: DocumentsListCustomerComponent },
    // { path: 'doc', component: UploadComponent },
    // { path: 'magic-link', component: MagicLinkComponent },
    // { path: 'customer-list', component: CustomerListComponent },
    // { path: 'lead-list', component: LeadListComponent },
    // { path: 'customer-details/:id', component: CustomerDetailModalComponent },
    // { path: 'lead-tetails/:id', component: LeadDetailComponent },
    // { path: 'lead-details/:id', component: LeadDetailComponent },
    // { path: 'user-list', component: UserListComponent },
    // { path: 'user-details/:id', component: UserDetailComponent },
    // { path: 'customer-details-modal', component: CustomerDetailModalComponent },
    // { path: 'documentType-details/:id', component: DocumentTypeDetailsComponent },
    // { path: 'documentType-list', component: DocumentTypeListComponent },
    // { path: 'user-details', component: UserDetailComponent },
    {
      path: 'customer-portal', component: CustomerPortalComponent, children: [
        { path: 'doc-list', component: DocumentsListCustomerComponent },
        { path: 'leadLogin/:id', component: LeadComponent },
        { path: 'customer-details/:id', component: CustomerDetailModalComponent },
        { path: 'customer-details-modal', component: CustomerDetailModalComponent },
        { path: 'user-details/:id', component: UserDetailComponent },
        { path: 'mortgage-calculator', component: MortgageCalculatorComponent },

      ]
    },
    {
      path: 'admin-dashboard', component: AdminDashboardComponent, children: [
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
        { path: 'lead-tetails/:id', component: LeadDetailComponent },
        { path: 'documentType-details/:id', component: DocumentTypeDetailsComponent },
        { path: 'exel', component: AdminDashboardComponent },
        {path:'download/:id',component:DownloadAccompanyingFormComponent}
      ]
    },
  ];
*/