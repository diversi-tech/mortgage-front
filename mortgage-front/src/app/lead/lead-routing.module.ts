import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { MagicLinkComponent } from '../auth/magic-link/magic-link.component';
const routes: Routes = [
    { path: 'magic-link', component: MagicLinkComponent },
    { path: ':id', component: LeadComponent },
    { path: '', component: LeadComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadRoutingModule { }