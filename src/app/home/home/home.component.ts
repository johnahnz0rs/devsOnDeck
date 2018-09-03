import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
// import { Login } from '../../login';
import { Router } from '@angular/router';
import { Org } from '../../org';
import { OrgService } from '../../services/org.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home.component.css']
  // '../../bootstrap.css',
})
export class HomeComponent implements OnInit {

  // loginInfo: Login;
  displayJobs = false;
  displayDevs = false;
  displayHome = true;
  // displayOrgs = false;

  allJobs;
  allDevs;
  allOrgs;

  createOrg: Org = new Org();

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(
    private appService: AppService,
    private orgService: OrgService,
    private router: Router) {
  }

  ngOnInit() {

  }

  showAllJobs() {
    this.displayJobs = true;
    this.displayDevs = false;
    this.displayHome = false;
    // this.displayOrgs = false;
  }

  showAllDevs() {
    this.displayDevs = true;
    this.displayJobs = false;
    this.displayHome = false;
    // this.displayOrgs = false;
  }

  showHome() {
    this.displayHome = true;
    this.displayDevs = false;
    this.displayJobs = false;
  }

  // _id: string;
  //   // orgName: string;
  //   // fname: string;
  //   // lname: string;
  //   // email: string;
  //   // pw: string;
  //   // cpw: string;
  //   // address: string;
  //   // city: string;
  //   // state: string;
  //   // zip: string;
  //   // jobs: Array<Job>;
  //   // accountType: string;

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
    console.log('*** home-comp: you clicked submitCreateOrg(org) ***', newOrg);
    this.orgService.createNewOrg(newOrg);
  }

  // showAllOrgs() {
    // this.displayOrgs = true;
    // this.displayDevs = false;
    // this.displayOrgs = false;
  // }

  // login() {
  //   const user = { email: this.loginInfo.email, pw: this.loginInfo.pw };
  //   console.log('***** running home.login() *****', user);
  //
  //   this.appService.login(user)
  //   // first, if login is successful, then set currentUser aka appService.signedIn;
  //     .subscribe(returnedUser => {
  //       // set signedIn
  //       this.appService.signedIn = returnedUser;
  //
  //       // then, get all Jobs;
  //       this.appService.getAllJobs()
  //         .subscribe(allJobs => {
  //           this.appService.allJobs = allJobs;
  //           console.log('***** home.login => allJobs *****', this.appService.allJobs);
  //
  //           // then, get all Orgs;
  //           this.appService.getAllOrgs()
  //             .subscribe(allOrgs => {
  //               this.appService.allOrgs = allOrgs;
  //               console.log('***** home.login => allOrgs *****', this.appService.allOrgs);
  //
  //               // then, get all Devs;
  //               this.appService.getAllDevs()
  //                 .subscribe(allDevs => {
  //                   this.appService.allDevs = allDevs;
  //                   console.log('***** home.login => allDevs *****', this.appService.allDevs);
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
  // } // end login()

}
