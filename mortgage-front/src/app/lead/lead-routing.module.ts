import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [
    {path:'lead',component:LeadComponent},
    {path:'',component:LeadComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadRoutingModule { }