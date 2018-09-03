import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login('', '', '');
  error: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  printThisLogin(form) {
    // for (const value of form.values()) {
    //   console.log(value);
    // }
    console.log(JSON.stringify(form));
  }

  tryLogin() {
    const data = {email: this.login.email, pw: this.login.pw};
    console.log('*** login > tryLogin(data) ***', data);
    this.login.accountType === 'dev' ?
      this.loginService.loginDev(data)
        .subscribe(dev => {
          console.log('its a dev!');
          this.router.navigateByUrl('/dev');
        }) :
      this.loginService.loginOrg(data)
        .subscribe(org => {
          console.log('its an org!');
          this.router.navigateByUrl('/org');
        });
  }

  //
  // submitLogin() {
  //   this.loginService.login(this.login);
  // }

  testLoginDev() {
    this.loginService.testLoginDev('1');
    this.router.navigateByUrl('/dev');
  }

  testLoginOrg() {
    this.loginService.testLoginOrg('1');
    this.router.navigateByUrl('/org');
  }

}
