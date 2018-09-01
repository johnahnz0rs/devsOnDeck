import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Login } from "./login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  login: Login = new Login();

  constructor(private appService: AppService) {}

  ngOnInit() {

  }

  submitLogin() {
    this.appService.login(this.login);
  }

  logout() {
    // this.appService.logout();
  }
}
