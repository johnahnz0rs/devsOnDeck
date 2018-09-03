import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-profile.component.css']
})
export class OrgProfileComponent implements OnInit {

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
