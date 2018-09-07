import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-dev-details',
  templateUrl: './home-dev-details.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-dev-details.component.css']
})
export class HomeDevDetailsComponent implements OnInit {

  quickSignUp: User;

  technologies = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.quickSignUp.subscribe(user => { this.quickSignUp = user; });
  }

  printQuickSignUp() {
    // code
    console.log('*** home-dev-details printing quickSignUp ***', this.quickSignUp);
  }

  registerForReal() {
    console.log('*** you told me to register this shiz forreal forreal ***', this.quickSignUp);
  }

  addRemoveTechnology(tech) {
    if (!this.quickSignUp.hasOwnProperty('devSkills')) {
      this.quickSignUp.devSkills = [tech];
      this.technologies.splice(this.technologies.indexOf(tech), 1);
    } else {
      if (this.quickSignUp.devSkills.includes(tech)) {
        this.quickSignUp.devSkills.splice(this.quickSignUp.devSkills.indexOf(tech), 1);
        this.technologies.push(tech);
      } else {
        this.quickSignUp.devSkills.push(tech);
        this.technologies.splice(this.technologies.indexOf(tech), 1);
      }
    }
  }

}
