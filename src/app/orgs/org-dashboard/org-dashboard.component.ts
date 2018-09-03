import { Component, OnInit } from '@angular/core';
import { Org } from '../../org';
import { Dev } from '../../dev';
import { Job } from '../../job';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-dashboard.component.css']
  //  '../../bootstrap.css'
})
export class OrgDashboardComponent implements OnInit {

  // myInfo = this.appService.signedIn;

  myInfo;
  showThisComp = 'devs';
  // allJobs = this.appService.allJobs;
  // allOrgs = this.appService.allOrgs;
  // allDevs = this.appService.allDevs;

  // showAllDevs = true;
  //
  // addJobForm = false;
  // newJob: Job;

  // selectedDev: Dev;
  // selectedOrg: Org;
  // selectedJob: Job;

  languages = ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'SQL', 'Java', 'Csharp', 'PHP', 'XML'];

  frameworks = ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'React', 'Vue.js', 'jQuery', 'Backbone', 'Bootstrap', 'Materialize', 'Django', 'Flask', 'Bottle', 'CherryPy', 'Meteor', 'Pyramid', 'MySQL', 'PostgreSQL'];

  constructor(
    private appService: AppService,
    private loginService: LoginService,
    private http: HttpClient,
    private router: Router) {}

  ngOnInit() {
    this.loginService.getUser().subscribe(response => { this.myInfo = response; });
  }

  clickThisComp(comp) {
    this.showThisComp = comp;
  }







  // addNewJob Form
  // addNewJob Form
  // addNewJob Form
  // addNewJob Form
  // addNewJob Form

  // addRequiredSkill(skill) {
  //   console.log('***** org-dashboard.addRequiredSkill => adding this skill ******', skill);
  //
  //   if (!this.newJob.skills) {
  //     this.newJob.skills = [skill];
  //   } else if (this.newJob.skills.includes(skill)) {
  //     this.newJob.skills.splice(this.newJob.skills.indexOf(skill), 1);
  //   } else {
  //     this.newJob.skills.push(skill);
  //   }
  // }
  //
  // showMeSkills() {
  //   console.log('****** this is the skills array *****', this.newJob.skills);
  // }


  // submitNewJob() {
  //   // update this function
  //   console.log('***** you clicked button: addThisPosition, with this data *****', this.newJob);
  //
  //   // if (!this.newJob.orgId) {
  //   //   this.newJob.orgId = this.myInfo._id;
  //   // }
  //   // console.log('***** org-dashboard ==> lol k i will send a post request to create a new job doc *****', this.newJob);
  //   //
  //   // this.appService.createOneJob(this.newJob);
  // }

  // end addNewJob Form
  // end addNewJob Form
  // end addNewJob Form
  // end addNewJob Form
  // end addNewJob Form



  //
  // switchDevsOrgs() {
  //   console.log('***** switching between showAllDevs and showAllOrgs *****');
  //   this.showAllDevs = !this.showAllDevs;
  // }



  // showDevDetail(id) {
  //   console.log('***** org-dashboard => you clicked showMeADev(id); this should open a popup *****', id);
  //   // this.appService.getOneDev(id)
  //   //   .subscribe(returnedDev => {
  //   //     this.selectedDev = returnedDev;
  //   //   });
  // }



  // showOrgDetail(id) {
  //   console.log('***** you clicked on an org with id *****', id);
    // this.appService.getOneOrg(id)
    //   .subscribe(returnedOrg => {
    //     this.selectedOrg = returnedOrg;
    //   });
  // }
  //
  // sendMsgToDev() {
  //   console.log('*** you want to send the entered msg to this dev ***', this.selectedDev._id, this.selectedDev.fname);
  //   // console.log(form.body);
  // }
  //
  // sendMsgToOrg() {
  //   console.log('*** you want to send the entered msg to this org ***', this.selectedOrg._id, this.selectedOrg.fname);
  //   // console.log(form.body);
  // }

}
