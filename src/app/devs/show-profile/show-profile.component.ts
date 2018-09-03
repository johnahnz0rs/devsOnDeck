import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

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
    console.log('*** show-profile-comp is printing myInfo ***', this.myInfo);
  }

}
