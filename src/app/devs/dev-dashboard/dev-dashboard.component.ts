import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Dev } from '../../dev';
import { Org } from '../../org';
import { Job } from '../../job';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {
  myInfo: Dev = this.appService.signedIn;
  allJobs: Array<Job> = this.appService.allJobs;
  allOrgs: Array<Org> = this.appService.allOrgs;
  showAllJobs = true;

  constructor(private appService: AppService, private router: Router) {

  }

  ngOnInit() {

    console.log('***** this is dashboard.allOrgs on OnInit *****', this.allOrgs);


    // reroute to login page if not logged in;
    if (!this.appService.signedIn) {
      this.router.navigateByUrl('/');
    }

    // show AllJobs is default view
    // can be toggled to show AllOrgs by using switchJobsOrgs() below;
    this.showAllJobs = true;

  }


  popupEditMyInfo() {
    console.log('***** you clicked button: edit my info *****');
    console.log(this.myInfo);
  }

  switchJobsOrgs() {
    this.showAllJobs ? console.log('***** switching from showAllJobs to showAllOrgs *****') : console.log('***** switching from' +
      ' showAllOrgs to showAllJobs *****');

    this.showAllJobs = !this.showAllJobs;
  }

  showOrgDetail(id) {
    console.log('***** you clicked on an org with id *****', id);
  }

}
