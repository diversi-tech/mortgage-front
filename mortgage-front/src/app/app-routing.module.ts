import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';


const routes: Routes =
  [

    { path: 'data', component: DataVisualizationComponent },
    { path: 'doc', component: DocumentDefinitionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'userList', component: UserListComponent },
    { path: 'userDetail/:id', component: UserDetailComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }