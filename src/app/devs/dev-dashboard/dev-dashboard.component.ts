import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { User } from '../../user';
import { Router } from '@angular/router';
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../../reset.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {

  user: User;
  showThisComp = 'jobs';

  updateDev: User = new User();

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  technologies = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

  constructor(
    private appService: AppService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(response => { this.user = response; });
  }

  clickThisComp(comp) {
    this.showThisComp = comp;
  }

  keys(obj) {
    return Object.keys(obj);
  }

  logout() {
    console.log('*** lol u clicked LOGOUT ***');
  }

  matchDevToJob(devSkills, jobSkills) {
    let numerator = 0;
    for (const skill of jobSkills) {
      if (devSkills.includes(skill)) {
        numerator += 1;
      }
    }
    return (numerator / (jobSkills.length)) * 100;
  }

  printUser() {
    console.log('*** devDash printing logged in user ***', this.user);
  }

}
