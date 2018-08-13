import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Dev } from '../../dev';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {
  myInfo: any;
  allJobs: any;
  showAllJobs = true;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {

      // show AllJobs as default &&
      this.showAllJobs = true;

      // get myInfo to display in #divMyInfo &&
      this.appService.getOneDev(this.appService.signedIn).subscribe(dev => {
          this.myInfo = dev;
          console.log('***** myInfo *****', this.myInfo);
          console.log('***** dev *****', dev);
      });

      // get allJobs to display in #divAllJobs
      this.appService.getAllJobs().subscribe(jobs => {
          this.allJobs = jobs;
          console.log('***** jobs *****', jobs);
      });

    // // if user is signed in:
    // if (this.appService.signedIn) {
    //   // then: show AllJobs as default &&
    //   this.showAllJobs = true;
    //
    //   // get myInfo to display in #divMyInfo &&
    //   this.appService.getOneDev(this.appService.signedIn).subscribe(dev => {
    //     this.myInfo = dev;
    //     console.log('***** myInfo *****', this.myInfo);
    //     console.log('***** dev *****', dev);
    //   });
    //
    //   // get allJobs to display in #divAllJobs
    //   this.appService.getAllJobs().subscribe(jobs => {
    //     this.allJobs = jobs;
    //     console.log('***** jobs *****', jobs);
    //   });
    // } else {
    //   // if not signed in, then re-route to splash page
    //   this.router.navigateByUrl('/');
    // }
  }

  popupEditMyInfo() {
      console.log('***** you clicked button: edit my info *****');
  }

  showJobDetail(job_id) {
      console.log('***** getting job details for job_id', job_id, '*****');
  }

  showOrgDetail(org_id) {
      console.log('***** getting org details for org_id', org_id, '*****');
  }

  switchJobsOrgs() {
      this.showAllJobs = !this.showAllJobs;
  }


}
