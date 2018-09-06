import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { UserService } from '../../services/user.service';
import { Login } from '../../login';
import { LoginService } from '../../services/login.service';
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
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.user
      .subscribe(response => {
        this.user = response;
        if (this.user.accountType === 'dev') {
          this.router.navigateByUrl('/dev');
        } else if (this.user.accountType === 'org') {
          this.router.navigateByUrl('/org');
        } else {
          console.log('*** homeDash jabroni ***', response);
        }
      });
    this.loginService.quickSignUp.subscribe(response => { this.quickSignUp = response; });
  }

  clickComp(comp) {
    this.displayThisComp = comp;
  }

  logMeIn(login) {
    this.loginService.logMeIn(login)
      .subscribe(response => {
        this.loginService.user = response;
        if (response.accountType) {
          if (response.accountType === 'dev') {
            this.router.navigateByUrl('/dev');
          } else {
            this.router.navigateByUrl('/org');
          }
        } else {
          console.log('*** response from testLogin() ***', response);
        }
      });
  }

  registerMe() {
    const user = {email: this.quickSignUp.email, pw: this.quickSignUp.pw};
    console.log('*** homeDash is ready to register this user ***', this.quickSignUp);
    this.userService.createOneUser(this.quickSignUp)
      .subscribe(() => {
        this.loginService.logMeIn(user)
          .subscribe(response => {
            this.loginService.thisIsUser(response);
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

}
