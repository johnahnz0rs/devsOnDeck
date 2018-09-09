import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';


@Component({
  selector: 'app-home-jobs',
  templateUrl: './home-jobs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-jobs.component.css']
})
export class HomeJobsComponent implements OnInit {

  allJobs;
  selectedJob;

  constructor(
    private jobService: JobService,
    private homeDash: HomeDashboardComponent
  ) { }

  ngOnInit() {
    this.jobService.getAllJobs();
    this.jobService.allJobs.subscribe(allJobs => { this.allJobs = allJobs; });
  }

  keys(object) {
    return Object.keys(object);
  }

  register(str) {
    console.log('*** you clicked register as', str, '***');
    this.homeDash.displayThisComp = `register-${str}`;
  }

  selectJob(job) {
    this.selectedJob = job;
  }

}
