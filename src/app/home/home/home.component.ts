import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Login} from '../../login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../bootstrap.css', './home.component.css']
})
export class HomeComponent implements OnInit {

    loginInfo: Login;
  constructor(private appService: AppService) { }

  ngOnInit() {
      this.loginInfo = new Login();
  }

  login() {
      const user = {email: this.loginInfo.email, pw: this.loginInfo.pw};
      console.log('***** home.login *****', user);
      this.appService.login(user);
  }

}
