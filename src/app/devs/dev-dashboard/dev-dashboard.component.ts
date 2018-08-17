import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Dev } from '../../dev';
import { Org } from "../../org";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

// import { ActivatedRoute } from '@angular/router';
//
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {
  myInfo: Dev = this.appService.signedIn;
  allJobs: Array<any> = this.appService.allJobs;
  allOrgs: Array<any> = this.appService.allOrgs;
  showAllJobs = true;

  constructor(private appService: AppService, private router: Router, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {

    console.log('***** this is dashboard.allOrgs on OnInit *****', this.allOrgs);


    // reroute to login page if not logged in;
    if (!this.appService.signedIn) {
      this.router.navigateByUrl('/');
    }

    // show AllJobs is default view (can be toggled to show AllOrgs by using switchJobsOrgs() below);
    this.showAllJobs = true;

    // // get allJobs to display in #divAllJobs
    // this.appService.getAllJobs().subscribe(jobs => {
    //   this.allJobs = jobs;
    //   console.log('***** retrieved all jobs *****', jobs);
    // });
    // // console.log('***** this is all Jobs *****', this.allJobs);

    // getAllOrgs to display in #divAllOrgs
    // this.appService.getAllOrgs().subscribe(orgs => {
    //   console.log('***** dev-dashboard.OnInit => retrieved all orgs *****', orgs);
    //   this.allOrgs = orgs;
    //   console.log('***** dev-dashboard.OnInit => this is allOrgs *****', this.allOrgs);
    // });

    console.log('***** dev-dashboard.OnInit => this is allOrgs *****', this.allOrgs);
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
