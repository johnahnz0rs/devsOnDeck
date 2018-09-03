import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
// import { Login } from '../../home-login';
import { Router } from '@angular/router';
import { Org } from '../../org';
import { OrgService } from '../../services/org.service';
import { Job } from '../../job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  displayThisComp = 'splash';
  allJobs;
  allDevs;
  allOrgs;

  showAddOrgForm = false;
  showAddJobForm = false;

  createOrg: Org = new Org();
  createJob: Job = new Job();

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(
    private appService: AppService,
    private orgService: OrgService,
    private jobService: JobService,
    private router: Router) {
  }

  ngOnInit() {

  }

  toggleAddOrgForm() {
    this.showAddOrgForm = !this.showAddOrgForm;
  }

  toggleAddJobForm() {
    this.showAddJobForm = !this.showAddJobForm;
  }

  clickComp(comp) {
    this.displayThisComp = comp;
  }

  modalButtonClicked() {
    console.log('*** home-dashboard: a modal trigger was clicked ***');
  }

  submitCreateOrg() {
    const newOrg = {
      orgName: this.createOrg.orgName,
      email: this.createOrg.email,
      pw: this.createOrg.pw,
      fname: this.createOrg.fname,
      lname: this.createOrg.lname,
      address: this.createOrg.address,
      city: this.createOrg.city,
      state: this.createOrg.state,
      zip: this.createOrg.zip,
      accountType: 'org',
      jobs: []
    };
    console.log('*** home-dashboard-comp: you clicked submitCreateOrg(org) ***', newOrg);
    this.orgService.createNewOrg(newOrg);
  }


  submitCreateJob() {
    const newJob = {
      orgId: '5b751a8debe058cb69905952',
      orgName: 'z0rs, Inc.',
      location: 'Los Angeles, CA',
      position: this.createJob.position,
      description: this.createJob.description,
      skills: ['HTML 5', 'CSS 3', 'JavaScript', 'Python', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'Django', 'MySQL']
    };
    console.log('*** home-dashboard-comp: you clicked submitCreateJob(job) ***', newJob);
    this.jobService.createNewJob(newJob);
  }

  // showAllOrgs() {
    // this.displayOrgs = true;
    // this.displayDevs = false;
    // this.displayOrgs = false;
  // }

  // home-login() {
  //   const user = { email: this.loginInfo.email, pw: this.loginInfo.pw };
  //   console.log('***** running home-dashboard.home-login() *****', user);
  //
  //   this.appService.home-login(user)
  //   // first, if home-login is successful, then set currentUser aka appService.signedIn;
  //     .subscribe(returnedUser => {
  //       // set signedIn
  //       this.appService.signedIn = returnedUser;
  //
  //       // then, get all Jobs;
  //       this.appService.getAllJobs()
  //         .subscribe(allJobs => {
  //           this.appService.allJobs = allJobs;
  //           console.log('***** home-dashboard.home-login => allJobs *****', this.appService.allJobs);
  //
  //           // then, get all Orgs;
  //           this.appService.getAllOrgs()
  //             .subscribe(allOrgs => {
  //               this.appService.allOrgs = allOrgs;
  //               console.log('***** home-dashboard.home-login => allOrgs *****', this.appService.allOrgs);
  //
  //               // then, get all Devs;
  //               this.appService.getAllDevs()
  //                 .subscribe(allDevs => {
  //                   this.appService.allDevs = allDevs;
  //                   console.log('***** home-dashboard.home-login => allDevs *****', this.appService.allDevs);
  //
  //                   // finally, route to appropriate dashboard;
  //                   // ***** remember to add "&& this.appService.allJobs" to both of these if statements;
  //                   if (returnedUser.accountType === 'dev' && this.appService.allOrgs) {
  //                     this.router.navigateByUrl(`/dev/dashboard`);
  //                   } else if (returnedUser.accountType === 'org' && this.appService.allOrgs) {
  //                     this.router.navigateByUrl('/org/dashboard');
  //                   }
  //
  //                 });
  //             });
  //         });
  //     });
  // } // end home-login()

}
