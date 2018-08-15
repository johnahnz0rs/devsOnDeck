import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Dev } from '../../dev';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {
  myInfo: any = {};
  allJobs: any = [];
  showAllJobs = true;


  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {

      // load the logged in user's info || reroute to login page if not logged in;
      if (!this.appService.signedIn) {
          this.router.navigateByUrl('/');
      } else {
          // this.myInfo = this.appService.signedIn;
      }

      // show AllJobs as default &&
      this.showAllJobs = true;

      // get allJobs to display in #divAllJobs
      this.appService.getAllJobs().subscribe(jobs => {
          this.allJobs = jobs;
          console.log('***** jobs *****', jobs);
      });
  }

  popupEditMyInfo() {
      console.log('***** you clicked button: edit my info *****');
      console.log(this.myInfo);
  }

  switchJobsOrgs() {
      this.showAllJobs = !this.showAllJobs;
      console.log('**** this is showAllJobs *****', this.showAllJobs);
  }


}
