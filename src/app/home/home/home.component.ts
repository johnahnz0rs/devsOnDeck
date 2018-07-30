import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Login } from '../../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../bootstrap.css', './home.component.css']
})
export class HomeComponent implements OnInit {
  n00b: any;
  loginInfo: Login;
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {
    this.loginInfo = new Login();
  }

  loginTemp() {
      // current code for login WITHOUT bcrypt
    const user = { email: this.loginInfo.email, pw: this.loginInfo.pw };
    console.log('***** home.login *****', user);

    this.appService.loginTemp(user).subscribe(returnedUser => {
        this.appService.signedIn = returnedUser._id;
        if (returnedUser.accountType === 'dev') {
            this.router.navigateByUrl('dev/dashboard');
        } else if (returnedUser.accountType === 'org') {
            this.router.navigateByUrl('org/dashboard');
        }
    });

    console.log('***** this is the end of login(), which returned someUser *****', this.n00b);
  }

  login() {
      // future code for login with bcrypt
  }
}
