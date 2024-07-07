import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerDetailModalComponent } from './Components/customer-detail-modal/customer-detail-modal.component';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
import { LeadComponent } from './Components/lead/lead.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';


const routes: Routes =
  [
    { path: 'data', component: DataVisualizationComponent },
    { path: 'doc', component: DocumentDefinitionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'customer-list', component: CustomerListComponent },
    {path:'lead-list',component:LeadListComponent},
    {path:'customer-details/:id',component:CustomerDetailModalComponent},
    {path:'lead-tetails/:id',component:LeadDetailComponent},
    {path:'leadLogin',component:LeadComponent},
    {path:'lead-details/:id',component:LeadDetailComponent},
    {path:'user-list',component:UserListComponent},
    {path:'user-details/:id',component:UserDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
