import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Dev } from '../../dev';
import { Org } from '../../org';
import { Job } from '../../job';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {

  myInfo: Dev = this.appService.signedIn;
  allJobs: Array<Job> = this.appService.allJobs;
  allOrgs: Array<Org> = this.appService.allOrgs;

  showAllJobs = true;
  showEditForm = false;
  updateDev: Dev;

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  languages = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML'];

  frameworks = ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];


  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    // reroute to login page if not logged in;
    if (!this.appService.signedIn) {
      this.router.navigateByUrl('/');
    }
  }


  toggleEditForm() {
    // console.log('***** you clicked button: edit my info *****');
    // set default values;
    this.updateDev = new Dev();
    this.updateDev._id = this.myInfo._id;
    this.updateDev.languages = this.myInfo.languages;
    this.updateDev.frameworks = this.myInfo.frameworks;
    console.log('**** you clicked button: editMyInfo OR x OR cancel *****', this.updateDev);
    // toggle div
    console.log('**** this is myInfo *****', this.myInfo);
    this.showEditForm = !this.showEditForm;
  }

  cancelEditForm() {
    this.updateDev = new Dev();
    this.updateDev.languages = this.myInfo.languages;
  }

  addLanguageToUpdateDev(language) {
    if (this.updateDev.languages.includes(language)) {
      console.log('***** removing language *****', language);
      // remove the language
      this.updateDev.languages.splice(this.updateDev.languages.indexOf(language), 1);
    } else {
      console.log('***** adding language *****', language);
      this.updateDev.languages.push(language);
    }
  }

  addFrameworkToUpdateDev(framework) {
    if (this.updateDev.frameworks.includes(framework)) {
      console.log('***** removing framework *****', framework);
      this.updateDev.frameworks.splice(this.updateDev.frameworks.indexOf(framework), 1);
    } else {
      console.log('***** adding framework *****', framework);
      this.updateDev.frameworks.push(framework);
    }
  }

  submitUpdatesToDev() {
    if (this.updateDev.fname || this.updateDev.lname || this.updateDev.email || this.updateDev.address || this.updateDev.city || this.updateDev.state || this.updateDev.zip || this.updateDev.bio) {
      console.log('***** you clicked submit edits, with this info *****', this.updateDev);
    } else {
      console.log('***** you clicked submit edits, but there is nothing to update *****', this.updateDev);
    }

  }

  showJobDetail(id) {
    console.log('***** you clicked on a job with id *****', id);
  }

  switchJobsOrgs() {
    this.showAllJobs ? console.log('***** switching from showAllJobs to showAllOrgs *****') : console.log('***** switching from' +
      ' showAllOrgs to showAllJobs *****');

    this.showAllJobs = !this.showAllJobs;
  }

  showOrgDetail(id) {
    console.log('***** you clicked on an org with id *****', id);
  }

}
