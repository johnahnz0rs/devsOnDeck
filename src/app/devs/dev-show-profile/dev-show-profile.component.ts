import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dev-show-profile',
  templateUrl: './dev-show-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-show-profile.component.css']
})
export class DevShowProfileComponent implements OnInit {

  myInfo;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(response => { this.myInfo = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printUserMyInfo() {
    console.log('*** dev-show-profile-comp is printing myInfo ***', this.myInfo);
  }

}
