import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';

import { HomeRegisterDevComponent } from './home/home-register-dev/home-register-dev.component';
import { HomeRegisterOrgComponent } from './home/home-register-org/home-register-org.component';
import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeDashboardComponent },
  // { path: 'signup/dev', pathMatch: 'full', component: HomeRegisterDevComponent },
  // { path: 'signup/org', pathMatch: 'full', component: HomeRegisterOrgComponent },
  // { path: 'getAllDevs', pathMatch: 'full', component: OrgDashboardComponent },
  { path: 'dev', pathMatch: 'full', component: DevDashboardComponent },
  { path: 'org', pathMatch: 'full', component: OrgDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
