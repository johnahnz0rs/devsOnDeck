import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';
import { User } from '../../user';
import { JobService } from '../../services/job.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dev-show-jobs',
  templateUrl: './dev-show-jobs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-show-jobs.component.css']
})
export class DevShowJobsComponent implements OnInit {

  user: User;
  allJobs: Array<Job>;
  selectedJob: Job;
  email: any;

  constructor(
    private jobService: JobService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(response => { this.user = response; });
    this.jobService.allJobs.subscribe(response => {
      this.allJobs = response;
      this.matchAllJobs();
    });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  matchAllJobs() {
    if (this.allJobs) {
      console.log('*** dev-show-jobs allJobs exists, so ill match this user-dev to all these jeobs ***', this.allJobs);
      for (const job of this.allJobs) {
        job.match = this.matchDevJob(this.user.devSkills, job.requiredSkills);
      }
    } else {
      console.log('*** dev-show-jobs.allJobs does NOT exist ***');
    }
  }

  printAllJobs() {
    console.log('*** dev-show-home-jobs-comp is printing allJobs ***', this.allJobs);
  }

  selectThisJob(job) {
    this.selectedJob = job;
  }

  unselectJob() {
    this.selectedJob = null;
  }

  matchDevJob(devSkills, jobSkills) {
    let numerator = 0;
    for (const i of jobSkills) {
      if (devSkills.includes(i)) {
        numerator++;
      }
    }
    return (numerator * 100 / jobSkills.length);
  }

  startNewEmail() {
    this.email = {'to': this.selectedJob.email, 'subject': '', 'body': ''};
  }

}
