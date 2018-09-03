import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';


import { HomeComponent } from './home/home/home.component';
import { SplashComponent } from './home/splash/splash.component';
import { JobsComponent } from './home/jobs/jobs.component';
import { DevsComponent } from './home/devs/devs.component';
import { LoginComponent } from './home/login/login.component';
import { LoginService } from './services/login.service';
import { DevRegisterComponent } from './home/dev-register/dev-register.component';
import { OrgRegisterComponent } from './home/org-register/org-register.component';


import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';
import { DevService } from './services/dev.service';
import { ShowJobsComponent } from './devs/show-jobs/show-jobs.component';
import { ShowDevsComponent } from './devs/show-devs/show-devs.component';
import { ShowOrgsComponent } from './devs/show-orgs/show-orgs.component';
import { ShowProfileComponent } from './devs/show-profile/show-profile.component';


import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { OrgService } from './services/org.service';
import { OrgShowDevsComponent } from './orgs/org-show-devs/org-show-devs.component';
import { OrgShowOrgsComponent } from './orgs/org-show-orgs/org-show-orgs.component';
import { OrgShowJobsComponent } from './orgs/org-show-jobs/org-show-jobs.component';
import { OrgShowProfileComponent } from './orgs/org-show-profile/org-show-profile.component';


import { JobService } from './services/job.service';


import { TestCompComponent } from './test/test-comp/test-comp.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrgRegisterComponent,
    OrgDashboardComponent,
    DevRegisterComponent,
    DevDashboardComponent,
    TestCompComponent,
    JobsComponent,
    DevsComponent,
    SplashComponent,
    ShowJobsComponent,
    ShowOrgsComponent,
    ShowProfileComponent,
    ShowDevsComponent,
    OrgShowDevsComponent,
    OrgShowOrgsComponent,
    OrgShowJobsComponent,
    OrgShowProfileComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [AppService, LoginService, DevService, OrgService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
