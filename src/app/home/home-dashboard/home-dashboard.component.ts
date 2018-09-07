import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { UserService } from '../../services/user.service';
import { DevService } from '../../services/dev.service';
import { Login } from '../../login';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  public displayThisComp = 'splash';
  user: User;
  login: Login = new Login();
  quickLogin: Login = new Login();
  quickSignUp: User;

  constructor(
    private userService: UserService,
    private devService: DevService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getAllDevs();
    this.userService.getAllOrgs();
    this.userService.getAllJobs();
    this.userService.user
      .subscribe(response => {
        this.user = response;
        if (response.accountType) {
          console.log('*** lol this is user type ***', response.accountType);
        } else {
          console.log('*** lol not logged in ***', response);
        }
      });
    this.userService.quickSignUp.subscribe(response => { this.quickSignUp = response; });
  }

  clickComp(comp) {
    this.displayThisComp = comp;
  }

  logMeIn(login) {
    this.userService.logMeIn(login)
      .subscribe(response => {
        if (response.accountType === 'dev') {
          this.router.navigateByUrl('/dev');
        } else if (response.accountType === 'org') {
          this.router.navigateByUrl('/org');
        } else {
          console.log('*** response from logMeIn() ***', response);
        }
      });
  }

  registerMe() {
    console.log('*** homeDash is ready to register this user ***', this.quickSignUp);
    const user = {email: this.quickSignUp.email, pw: this.quickSignUp.pw};
    this.userService.createOneUser(this.quickSignUp)
      .subscribe(() => {
        this.userService.logMeIn(user)
          .subscribe(response => {
            this.userService.thisIsUser(response);
            if (response.accountType === 'dev') {
              this.router.navigateByUrl('/dev');
            } else if (response.accountType === 'org') {
              this.router.navigateByUrl('/org');
            } else {
              console.log('*** maaannnnnnnnnn ***', response);
            }
          });
      });
  }

  printUser() {
    console.log('*** homeDash printing user ***', this.user);
  }
  printQuickSignUp() {
    console.log('*** homeDash printing quickSignUp ***', this.quickSignUp);
  }

}
