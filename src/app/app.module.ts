import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';


import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { HomeSplashComponent } from './home/home-splash/home-splash.component';
import { HomeJobsComponent } from './home/home-jobs/home-jobs.component';
import { HomeDevsComponent } from './home/home-devs/home-devs.component';
import { HomeLoginComponent } from './home/home-login/home-login.component';
import { LoginService } from './services/login.service';
import { HomeRegisterDevComponent } from './home/home-register-dev/home-register-dev.component';
import { HomeRegisterOrgComponent } from './home/home-register-org/home-register-org.component';


import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';
import { DevService } from './services/dev.service';
import { DevShowJobsComponent } from './devs/dev-show-jobs/dev-show-jobs.component';
import { DevShowDevsComponent } from './devs/dev-show-devs/dev-show-devs.component';
import { DevShowOrgsComponent } from './devs/dev-show-orgs/dev-show-orgs.component';
import { DevShowProfileComponent } from './devs/dev-show-profile/dev-show-profile.component';


import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { OrgService } from './services/org.service';
import { OrgShowDevsComponent } from './orgs/org-show-devs/org-show-devs.component';
import { OrgShowOrgsComponent } from './orgs/org-show-orgs/org-show-orgs.component';
import { OrgShowJobsComponent } from './orgs/org-show-jobs/org-show-jobs.component';
import { OrgProfileComponent } from './orgs/org-profile/org-profile.component';


import { JobService } from './services/job.service';


import { TestCompComponent } from './test/test-comp/test-comp.component';
import { OrgAddJobComponent } from './orgs/org-add-job/org-add-job.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    HomeLoginComponent,
    HomeRegisterOrgComponent,
    OrgDashboardComponent,
    HomeRegisterDevComponent,
    DevDashboardComponent,
    TestCompComponent,
    HomeJobsComponent,
    HomeDevsComponent,
    HomeSplashComponent,
    DevShowJobsComponent,
    DevShowOrgsComponent,
    DevShowProfileComponent,
    DevShowDevsComponent,
    OrgShowDevsComponent,
    OrgShowOrgsComponent,
    OrgShowJobsComponent,
    OrgProfileComponent,
    OrgAddJobComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [AppService, LoginService, DevService, OrgService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
