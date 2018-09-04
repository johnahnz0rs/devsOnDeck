import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-dev-show-jobs',
  templateUrl: './dev-show-jobs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-show-jobs.component.css']
})
export class DevShowJobsComponent implements OnInit {

  allJobs;
  selectedJob;

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe(response => {this.allJobs = response; });
    // this.allJobs = this.jobService.readAllJobs();
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllJobs() {
    console.log('*** dev-show-home-jobs-comp is printing allJobs ***', this.allJobs);
  }

  selectThisJob(job) {
    // this.jobService.readOneJob(id)
    //   .subscribe(response => { this.selectedJob = response; });
    // this.selectedJob = this.jobService.readOneJob(id);
    this.selectedJob = job;
  }

}
