import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-profile.component.css']
})
export class OrgProfileComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(response => { this.user = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printMyInfo() {
    console.log('*** org-profile-comp is printing myInfo ***', this.user);
  }

}
