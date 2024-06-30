import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/Components/login/login.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userDetail', component: UserDetailComponent },
  { path: 'userList', component: UserListComponent }
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

