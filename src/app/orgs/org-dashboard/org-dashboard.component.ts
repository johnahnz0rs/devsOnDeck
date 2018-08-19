import { Component, OnInit } from '@angular/core';
import { Org } from '../../org';
import { Dev } from '../../dev';
import { Job } from '../../job';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './org-dashboard.component.css']
})
export class OrgDashboardComponent implements OnInit {

  myInfo: Org = this.appService.signedIn;
  allJobs: Array<Job> = this.appService.allJobs;
  allOrgs: Array<Org> = this.appService.allOrgs;
  allDevs: Array<Dev> = this.appService.allDevs;
  showAllJobs = false;
  showAllOrgs = false;
  showAllDevs = true;

  newJob: Job = new Job();

  allSkills = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

  constructor(private appService: AppService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    console.log('***** org-dashboard.OnInit => allJobs *****', this.allJobs);
    console.log('***** org-dashboard.OnInit => allOrgs *****', this.allOrgs);
    console.log('***** org-dashboard.OnInit => allDevs *****', this.allDevs);

    if (!this.appService.signedIn) {
      this.router.navigateByUrl('/');
    }

  }







  // addNewJob Form
  // addNewJob Form
  // addNewJob Form
  // addNewJob Form
  // addNewJob Form

  openAddNewJob() {
    console.log('***** org-dashboard => you clicked addNewJob(); this should open a popup *****');
  }

  addRequiredSkill(skill) {
    console.log('***** org-dashboard.addRequiredSkill => adding this skill ******', skill);

    if (!this.newJob.skills) {
      this.newJob.skills = [skill];
    } else if (this.newJob.skills.includes(skill)) {
      this.newJob.skills.splice(this.newJob.skills.indexOf(skill), 1);
    } else {
      this.newJob.skills.push(skill);
    }
  }

  showMeSkills() {
    console.log('****** this is the skills array *****', this.newJob.skills);
  }



  createNewJob() {
    if (!this.newJob.orgId) {
      this.newJob.orgId = this.myInfo._id;
    }
    console.log('***** org-dashboard ==> lol k i will send a post request to create a new job doc *****', this.newJob);

    this.appService.createOneJob(this.newJob);
  }

  // end addNewJob Form
  // end addNewJob Form
  // end addNewJob Form
  // end addNewJob Form
  // end addNewJob Form










  showMyJob(id) {
    console.log('***** org-dashboard => you clicked showMyJob(id); this should open a popup *****', id);
  }


  showOrgs() {
    this.showAllJobs = false;
    this.showAllDevs = false;
    this.showAllOrgs = true;
  }

  showJobs() {
    this.showAllDevs = false;
    this.showAllOrgs = false;
    this.showAllJobs = true;
  }

  showDevs() {
    this.showAllJobs = false;
    this.showAllOrgs = false;
    this.showAllDevs = true;
  }

  showMeADev(id) {
    console.log('***** org-dashboard => you clicked showMeADev(id); this should open a popup *****', id);
  }

}
