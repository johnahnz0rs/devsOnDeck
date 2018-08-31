import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
// import { Login } from '../../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // '../../bootstrap.css',
})
export class HomeComponent implements OnInit {

  // loginInfo: Login;
  displayJobs = true;
  displayDevs = false;
  displayOrgs = false;

  allJobs;
  allDevs;
  allOrgs;

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {

  }

  showAllJobs() {
    this.displayJobs = true;
    this.displayDevs = false;
    this.displayOrgs = false;
  }

  showAllDevs() {
    this.displayDevs = true;
    this.displayJobs = false;
    this.displayOrgs = false;
  }

  showAllOrgs() {
    this.displayOrgs = true;
    this.displayDevs = false;
    this.displayOrgs = false;
  }

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
