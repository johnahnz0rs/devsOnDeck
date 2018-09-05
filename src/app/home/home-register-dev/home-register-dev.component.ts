import { Component, OnInit } from '@angular/core';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-register-dev',
  templateUrl: './home-register-dev.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-register-dev.component.css']
})
export class HomeRegisterDevComponent implements OnInit {

    newUser: User = new User();

    states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    technologies = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

    frameworks = [];

  constructor(
    private homeDash: HomeDashboardComponent,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {}

  registerAsOrg() {
    this.homeDash.displayThisComp = 'register-org';
  }

  cancelRegister() {
    this.homeDash.displayThisComp = 'splash';
  }

  addRemoveTechnology(tech) {
    if (!this.newUser.hasOwnProperty('devSkills')) {
      this.newUser.devSkills = [tech];
      this.technologies.splice(this.technologies.indexOf(tech), 1);
    } else {
      if (this.newUser.devSkills.includes(tech)) {
        this.newUser.devSkills.splice(this.newUser.devSkills.indexOf(tech), 1);
        this.technologies.push(tech);
      } else {
        this.newUser.devSkills.push(tech);
        this.technologies.splice(this.technologies.indexOf(tech), 1);
      }
    }
  }


  registerDev() {
    this.newUser.accountType = 'dev';
    if (!this.newUser.devSkills) {
      this.newUser.devSkills = [];
    }

    delete this.newUser['cpw'];
    console.log('*** home-register-dev-comp is submitting createUser(user) request ***', this.newUser);
    this.userService.createOneUser(this.newUser).subscribe( result => {
      console.log('*** home-register-dev-comp received this response from userService.createOneUser() ***', result);
      this.router.navigateByUrl('/');
    });
  }

}
