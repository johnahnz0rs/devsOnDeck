import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-show-jobs',
  templateUrl: './show-jobs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './show-jobs.component.css']
})
export class ShowJobsComponent implements OnInit {

  allJobs;
  selectedJob;

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.readAllJobs().subscribe(response => {this.allJobs = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllJobs() {
    console.log('*** show-jobs-comp is printing allJobs ***', this.allJobs);
  }

  selectThisJob(job) {
    // this.jobService.readOneJob(id)
    //   .subscribe(response => { this.selectedJob = response; });
    // this.selectedJob = this.jobService.readOneJob(id);
    this.selectedJob = job;
  }

}
