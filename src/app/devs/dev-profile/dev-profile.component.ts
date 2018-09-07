import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-dev-show-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-profile.component.css']
})
export class DevProfileComponent implements OnInit {

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

  printUserMyInfo() {
    console.log('*** dev-profile-comp is printing myInfo ***', this.user);
  }

}
