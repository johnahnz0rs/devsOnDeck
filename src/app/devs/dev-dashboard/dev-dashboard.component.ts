import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';
import { Dev } from '../../dev';
import { Org } from '../../org';
import { Job } from '../../job';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-dashboard.component.css']
//  '../../bootstrap.css',
})
export class DevDashboardComponent implements OnInit {


  // myInfo = this.appService.signedIn;
  myInfo;
  showThisComp = 'jobs';
  // showJobs = true;
  // showDevs = false;
  // showOrgs = false;
  // showProfile = false;



  showEditForm = false;
  allJobs = this.appService.allJobs;
  allOrgs = this.appService.allOrgs;

  // showAllJobs = true;

  updateDev: Dev = new Dev();

  selectedJob: Job;
  selectedOrg: Org;

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  languages = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML']; // all available languages;

  frameworks = ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL']; // all available frameworks;


  constructor(
    private appService: AppService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(response => { this.myInfo = response; });
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

  toggleEditForm() {
    // console.log('***** you clicked button: edit my info *****');
    // set default values;
    this.updateDev = new Dev();
    // this.updateDev._id = this.myInfo._id;

    //
    // this.updateDev.languages = this.myInfo.languages;
    // this.updateDev.frameworks = this.myInfo.frameworks;

    console.log('**** you clicked button: editMyInfo OR x OR cancel *****', this.updateDev);
    // toggle div
    console.log('**** this is myInfo *****', this.myInfo);
    this.showEditForm = !this.showEditForm;
  }

  addLanguageToUpdateDev(language) {
    if (this.updateDev.languages.includes(language)) {
      // remove the language
      console.log('***** removing language *****', language);
      // this.languages.push(language);
      this.updateDev.languages.splice(this.updateDev.languages.indexOf(language), 1);
    } else {
      // add the language
      console.log('***** adding language *****', language);
      this.updateDev.languages.push(language);
      // this.languages.splice(this.languages.indexOf(language), 1);
    }
  }

  addFrameworkToUpdateDev(framework) {
    if (this.updateDev.frameworks.includes(framework)) {
      // remove the framework
      console.log('***** removing framework *****', framework);
      // this.frameworks.push(framework);
      this.updateDev.frameworks.splice(this.updateDev.frameworks.indexOf(framework), 1);
    } else {
      // add the framework
      console.log('***** adding framework *****', framework);
      this.updateDev.frameworks.push(framework);
      // this.frameworks.splice(this.languages.indexOf(framework), 1);
    }
  }

  submitUpdatesToDev() {
    if (this.updateDev.fname || this.updateDev.lname || this.updateDev.email || this.updateDev.address || this.updateDev.city || this.updateDev.state || this.updateDev.zip || this.updateDev.bio) {
      console.log('***** you clicked submit edits, with this info *****', this.updateDev);
    } else {
      console.log('***** you clicked submit edits, but there is nothing to update *****', this.updateDev);
    }
  }

  // switchJobsOrgs() {
  //   this.showAllJobs ? console.log('***** switching from showAllJobs to showAllOrgs *****') : console.log('***** switching from' +
  //     ' showAllOrgs to showAllJobs *****');
  //
  //   this.showAllJobs = !this.showAllJobs;
  // }

  showJobDetail(id) {
    console.log('***** you clicked on a job with id *****', id);
    // this.selectedJob = new Job();
    // this.selectedJob._id = id;
    // this.selectedJob.position = 'hax0rs';
    // this.selectedJob.orgName = 'z0rs corps' + id;
    // this.selectedJob.location = 'Los Angeles, CA';
    // this.selectedJob.description = 'gotsta do the coding';
    // this.selectedJob.skills = ['HTML 5', 'CSS 3', 'XML', 'MongoDB', 'Angular'];
    // this.selectedJob.match = this.matchDevToJob(this.myInfo.skills, this.selectedJob.skills);

    // this.appService.getOneJob(id)
    //   .subscribe(returnedJob => {
    //     this.selectedJob = returnedJob;
    //     this.matchDevToJob(this.myInfo.skills, this.selectedJob.skills);
    //   });
  }

  showOrgDetail(id) {
    console.log('***** you clicked on an org with id *****', id);
    // this.appService.getOneOrg(id)
    //   .subscribe(returnedOrg => {
    //     this.selectedOrg = returnedOrg;
    //   });
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

  sendMsgToJob() {
    console.log('*** you want to send the entered msg to this job\'s org ***', this.selectedJob._id, this.selectedJob.position);
    // console.log(form.body);
  }

  sendMsgToOrg() {
    console.log('*** you want to send the entered msg to this org ***', this.selectedOrg._id, this.selectedOrg.orgName);
    // console.log(form.body);
  }

}
