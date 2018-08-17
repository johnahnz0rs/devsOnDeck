import { Component, OnInit } from '@angular/core';
import { Org } from '../../org';
import { Dev } from '../../dev';
import { Job } from '../../job';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './org-dashboard.component.css']
})
export class OrgDashboardComponent implements OnInit {

  myInfo: Org = this.appService.signedIn;
  allJobs: Array<any> = this.appService.allJobs;
  allOrgs: Array<any> = this.appService.allOrgs;
  allDevs: Array<any> = this.appService.allDevs;
  // showAllJobs = true;

  constructor(private appService: AppService, private http: HttpClient) {}

  ngOnInit() {
    console.log('***** org-dashboard.OnInit => allJobs *****', this.allJobs);
    console.log('***** org-dashboard.OnInit => allOrgs *****', this.allOrgs);
    console.log('***** org-dashboard.OnInit => allDevs *****', this.allDevs);
  }


  addNewJob() {
    console.log('***** org-dashboard => you clicked addNewJob() *****');
  }

  showMyJob(id) {
    console.log('***** org-dashboard => you clicked showMyJob(id) *****', id);
  }
}
