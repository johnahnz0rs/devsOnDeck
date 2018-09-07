import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';
import { User } from '../../user';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-dashboard.component.css']
})
export class OrgDashboardComponent implements OnInit {

  user: User;
  myJobs: Array<Job>;
  showThisComp = 'devs';

  technologies = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];


  constructor(
    private userService: UserService,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(response => { this.user = response; });
    this.jobService.getMyJobs(this.user._id).subscribe(response => { this.myJobs = response; });
  }

  clickThisComp(comp) {
    this.showThisComp = comp;
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

  nothingClick() {
    console.log('*** clicky clicky ***');
  }

}
