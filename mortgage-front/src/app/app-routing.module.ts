import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerDetailModalComponent } from './Components/customer-detail-modal/customer-detail-modal.component';
const routes: Routes =
  [
    { path: 'data', component: DataVisualizationComponent },
    { path: 'doc', component: DocumentDefinitionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'customer-list', component: CustomerListComponent },
    {path:'customer-details/:id',component:CustomerDetailModalComponent} 
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';
// import { ContactComponent } from './contact/contact.component';
// import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
