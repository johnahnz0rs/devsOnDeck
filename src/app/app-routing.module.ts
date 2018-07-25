import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DevSuliComponent} from './devs/dev-suli/dev-suli.component';
import {HomeComponent} from './home/home/home.component';
import {OrgSuliComponent} from './orgs/org-suli/org-suli.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'dev', pathMatch: 'full', component: DevSuliComponent},
    { path: 'org', pathMatch: 'full', component: OrgSuliComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}