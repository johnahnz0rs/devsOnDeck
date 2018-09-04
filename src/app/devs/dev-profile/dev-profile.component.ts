import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dev-show-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-profile.component.css']
})
export class DevProfileComponent implements OnInit {

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
    console.log('*** dev-profile-comp is printing myInfo ***', this.myInfo);
  }

}
