import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerDetailModalComponent } from './Components/customer-detail-modal/customer-detail-modal.component';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
const routes: Routes =
  [
    { path: 'data', component: DataVisualizationComponent },
    { path: 'doc', component: DocumentDefinitionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'customer-list', component: CustomerListComponent },
    {path:'lead-list',component:LeadListComponent},
    {path:'customer-details/:id',component:CustomerDetailModalComponent},
    {path:'lead-tetails/:id',component:LeadDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
