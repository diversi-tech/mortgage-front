import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { MagicLinkComponent } from '../auth/magic-link/magic-link.component';
import { authGuardLead } from '../auth/auth.guard';
import { PageNotFoundComponent } from '../global/page-not-found/page-not-found.component';
//import { authGuardLead } from '../auth/auth.guard';

// const routes: Routes = [
//     { path: '', component: LeadComponent },
//     { path: 'lead/:id', component: LeadComponent },
//     { path: 'magic-link', component: MagicLinkComponent },
// ];

const routes: Routes = [{
    path: '', component: LeadComponent,
    canActivate: [authGuardLead],
    children: [
        //{ path: '', component: LeadComponent },
        { path: 'lead/:id', component: LeadComponent },
        { path: 'magic-link', component: MagicLinkComponent },
    ]
}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadRoutingModule { }