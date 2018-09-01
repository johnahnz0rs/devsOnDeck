import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { LoginService } from './services/login.service';

import { DevRegisterComponent } from './devs/dev-register/dev-register.component';
import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';
import { DevService } from './services/dev.service';

import { OrgRegisterComponent } from './orgs/org-register/org-register.component';
import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { OrgService } from './services/org.service';

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
    TestCompComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [AppService, LoginService, DevService, OrgService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
