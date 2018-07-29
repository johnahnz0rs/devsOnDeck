import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dev } from '../../dev';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-dev-suli',
  templateUrl: './dev-suli.component.html',
  styleUrls: ['../../bootstrap.css', './dev-suli.component.css']
})
export class DevSuliComponent implements OnInit {

    newDev: Dev = new Dev();

    showP1: boolean;
    showP2: boolean;
    showP3: boolean;

    states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    languages = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML'];

    frameworks = ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
      // this.newDev.accountType = 'dev';
      this.newDev.languages = [];
      this.newDev.frameworks = [];
      this.newDev.skills = [];
      this.showP1 = true;
      this.showP2 = false;
      this.showP3 = false;
  }

  registerDev() {

      for (let i in this.newDev.languages) {
          this.newDev.skills.push(i);
      }
      for (let i in this.newDev.frameworks) {
          this.newDev.skills.push(i);
      }
      const dev = {
          accountType: 'dev',
          fname: this.newDev.fname,
          lname: this.newDev.lname,
          email: this.newDev.email,
          address: this.newDev.address,
          city: this.newDev.city,
          state: this.newDev.state,
          zip: this.newDev.zip,
          skills: this.newDev.skills,
          languages: this.newDev.languages,
          frameworks: this.newDev.frameworks,
      };

      console.log('***** registerDev(dev) ******', dev);
      this.appService.createOneDev(dev);
  }

  previous() {
      if (this.showP1) {
          // pass
      } else if (this.showP2) {
          this.showP2 = false;
          this.showP1 = true;
      } else if (this.showP3) {
          this.showP3 = false;
          this.showP2 = true;
      }
  }

  next() {
      if (this.showP1) {
          this.showP1 = false;
          this.showP2 = true;
      } else if (this.showP2) {
          this.showP2 = false;
          this.showP3 = true;
      } else if (this.showP3) {
          // pass
      }
  }

  addLanguage(language) {
      console.log(language, ' is being clicked');
      // if newDev.languages has language
      if (this.newDev.languages.includes(language)) {
          this.newDev.languages.splice(this.newDev.languages.indexOf(language), 1);
      } else if (!this.newDev.languages.includes(language) && this.newDev.languages.length < 5) {
          this.newDev.languages.push(language);
          console.log(this.newDev.languages);
      } else {
          console.log('you already chose 5 languages');
          // error handling? message on template?
      }
  }

  addFramework(framework) {
      if (this.newDev.frameworks.includes(framework)) {
          this.newDev.frameworks.splice(this.newDev.frameworks.indexOf(framework), 1);
      } else if (!this.newDev.frameworks.includes(framework) && this.newDev.frameworks.length < 5) {
          this.newDev.frameworks.push(framework);
      } else {
          console.log('you already chose 5 frameworks/libraries');
          // error handling? message on template?
      }
  }

}
