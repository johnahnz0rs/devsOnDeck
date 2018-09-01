import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  error: any;
  email: string;
  pw: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  tryLogin() {
    // console.log(`*** tryLogin(${this.login.email}, ${this.login.pw}) ***`);
    // console.log(this.login);

    const data = {email: this.email, pw: this.pw};
    console.log('*** data ***', data);
    console.log('*** login ***', this.login);
    // this.login.accountType === 'dev' ?
    //   this.loginService.loginDev(data) :
    //   this.loginService.loginOrg(data);
  }

  //
  // submitLogin() {
  //   this.loginService.login(this.login);
  // }



}
