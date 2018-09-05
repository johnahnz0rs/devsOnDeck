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
  // private allJobs;
  // private allDevs;
  login: Login = new Login();
  registration: User = new User();

  constructor(
    // private userService: UserService,
    // private jobService: JobService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getUser()
      .subscribe(user => {
        if (user) {
          if (user.accountType === 'dev') {
            console.log('*** its a dev! ***');
            this.router.navigateByUrl('/dev');
          } else if (user.accountType === 'org') {
            console.log('*** its an org! ***');
            this.router.navigateByUrl('/org');
          } else {
            console.log('*** lol this is user ***', user);
          }
        } else {
          console.log('*** jabroni ***');
        }
      });
  }

  clickComp(comp) {
    this.displayThisComp = comp;
  }

  logMeIn() {
    this.loginService.login(this.login)
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

  signup() {
    // code
  }
}
