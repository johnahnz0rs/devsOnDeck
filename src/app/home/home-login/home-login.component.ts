import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  user = {email: '', pw: ''};
  error: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    const data = {email: this.user.email, pw: this.user.pw};
    console.log('*** home-login-comp is running login(data) ***', data);
    this.loginService.login(data)
      .subscribe(user => {
        if (user.accountType) {
          this.loginService.user = user;
          if (user.accountType === 'dev') {
            // console.log('*** lol its a dev! ***', user);
            this.router.navigateByUrl('/dev');
          } else {
            // console.log('*** lol its an org! ***', user);
            this.router.navigateByUrl('/org');
          }
        } else {
          console.log('***', user, '***');
        }
      });
  }

}
