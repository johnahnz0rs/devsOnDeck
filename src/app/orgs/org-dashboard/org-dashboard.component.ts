import { Component, OnInit } from '@angular/core';
import { Org } from '../../org';
import { Dev } from '../../dev';
import { Job } from '../../job';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-dashboard.component.css']
  //  '../../bootstrap.css'
})
export class OrgDashboardComponent implements OnInit {

  myInfo;
  myJobs;
  showThisComp = 'devs';

  languages = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML'];

  frameworks = ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

  constructor(
    private appService: AppService,
    private loginService: LoginService,
    private jobService: JobService,
    private router: Router) {}

  ngOnInit() {
    this.loginService.getUser()
      .subscribe(response => {
        this.myInfo = response;
        this.getMyJobs(response._id);
      });
  }

  getMyJobs(id) {
    this.jobService.getMyJobs(id)
      .subscribe(response => {
        this.myJobs = response;
      });
  }

  clickThisComp(comp) {
    this.showThisComp = comp;
  }

  logout() {
    console.log('*** lol u clicked logout ***');
    console.log('johnahnz0rs is 1337');
  }

  nothingClick() {
    console.log('*** clicky clicky ***');
  }

}
