import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-org-show-jobs',
  templateUrl: './org-show-jobs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-show-jobs.component.css']
})
export class OrgShowJobsComponent implements OnInit {

  allJobs;

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.readAllJobs().subscribe(response => { this.allJobs = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllJobs() {
    console.log('*** show-jobs-comp is printing allJobs ***', this.allJobs);
  }

}
