import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';


@Component({
  selector: 'app-home-jobs',
  templateUrl: './home-jobs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-jobs.component.css']
})
export class HomeJobsComponent implements OnInit {

  allJobs;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    // this.allJobs = [];
    // this.jobService.readAllJobs()
    //   .subscribe(response => {
    //     this.allJobs = response;
    //   });

    this.allJobs = [];


    this.jobService.readAllJobs().subscribe(allJobs => {
      this.allJobs = allJobs;
    });


    console.log(this.allJobs);

  }

  printAllJobs() {
    console.log(this.allJobs);
  }

  keys(object) {
    return Object.keys(object);
  }

}
