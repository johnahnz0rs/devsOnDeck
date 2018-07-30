import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevSuliComponent } from './devs/dev-suli/dev-suli.component';
import { HomeComponent } from './home/home/home.component';
import { OrgSuliComponent } from './orgs/org-suli/org-suli.component';
import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'signup/dev', pathMatch: 'full', component: DevSuliComponent },
  { path: 'signup/org', pathMatch: 'full', component: OrgSuliComponent },
  { path: 'getAllDevs', pathMatch: 'full', component: OrgDashboardComponent },
  { path: 'dev/dashboard', pathMatch: 'full', component: DevDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
