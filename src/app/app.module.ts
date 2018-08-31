import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './services/app.service';
import { DevService } from './services/dev.service';
import { OrgService } from './services/org.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevSuliComponent } from './devs/dev-suli/dev-suli.component';
import { HomeComponent } from './home/home/home.component';
import { OrgSuliComponent } from './orgs/org-suli/org-suli.component';
import { OrgDashboardComponent } from './orgs/org-dashboard/org-dashboard.component';
import { DevDashboardComponent } from './devs/dev-dashboard/dev-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DevSuliComponent,
    HomeComponent,
    OrgSuliComponent,
    OrgDashboardComponent,
    DevDashboardComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [AppService, DevService, OrgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
