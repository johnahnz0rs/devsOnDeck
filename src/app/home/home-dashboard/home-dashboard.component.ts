import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  public displayThisComp = 'splash';
  private allJobs;
  private allDevs;

  constructor(
    private userService: UserService,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe(jobs => { this.allJobs = jobs; });
    this.userService.getAllDevs().subscribe(devs => { this.allDevs = devs; });
  }

  clickComp(comp) {
    this.displayThisComp = comp;
  }
}
