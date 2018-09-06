import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  _login = new BehaviorSubject(new Login());
  login = this._login.asObservable();
  error: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logMeIn() {
    // const data = {email: this._login.email, pw: this._login.pw};
    // console.log('*** home-login-comp is running login(data) ***', data);
    // this.loginService.login(data)
    //   .subscribe(user => {
    //     if (user.accountType) {
    //       this.loginService.user = user;
    //       if (user.accountType === 'dev') {
    //         // console.log('*** lol its a dev! ***', user);
    //         this.router.navigateByUrl('/dev');
    //       } else {
    //         // console.log('*** lol its an org! ***', user);
    //         this.router.navigateByUrl('/org');
    //       }
    //     } else {
    //       console.log('***', user, '***');
    //     }
    //   });
  }

}
