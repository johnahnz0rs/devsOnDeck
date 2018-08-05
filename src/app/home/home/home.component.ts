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

  loginInfo: Login;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {
    this.loginInfo = new Login();
  }


  login() {
    const user = { email: this.loginInfo.email, pw: this.loginInfo.pw };
    console.log('***** running home.login() *****', user);

    this.appService.login(user)
        .subscribe(returnedUser => {
            // set signedIn
            this.appService.signedIn = returnedUser._id;

            // route to appropriate dashboard
            if (returnedUser.accountType === 'dev') {
                this.router.navigateByUrl('/dev/dashboard');
            } else if (returnedUser.accountType === 'org') {
                this.router.navigateByUrl('/org/dashboard');
            }
         });
  }


}
