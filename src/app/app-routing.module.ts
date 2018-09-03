import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home/home.component';

import { DevRegisterComponent } from './home/dev-register/dev-register.component';
import { OrgRegisterComponent } from './home/org-register/org-register.component';
import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  // { path: 'signup/dev', pathMatch: 'full', component: DevRegisterComponent },
  // { path: 'signup/org', pathMatch: 'full', component: OrgRegisterComponent },
  // { path: 'getAllDevs', pathMatch: 'full', component: OrgDashboardComponent },
  { path: 'dev', pathMatch: 'full', component: DevDashboardComponent },
  { path: 'org', pathMatch: 'full', component: OrgDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
