import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-org-show-profile',
  templateUrl: './org-show-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-show-profile.component.css']
})
export class OrgShowProfileComponent implements OnInit {

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

  printMyInfo() {
    console.log('*** profile-comp is printing myInfo ***', this.myInfo);
  }

}
