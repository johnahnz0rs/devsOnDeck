import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DevService } from '../../services/dev.service';
import { User } from '../../user';

@Component({
  selector: 'app-dev-show-devs',
  templateUrl: './dev-show-devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-show-devs.component.css']
})

export class DevShowDevsComponent implements OnInit {

  user: User;
  allDevs: Array<User>;
  selectedDev: User;
  email: any;

  constructor(
    private userService: UserService,
    private devService: DevService
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(response => { this.user = response; });
    this.devService.allDevs.subscribe(response => { this.allDevs = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllDevs() {
    console.log('*** dev-show-home-devs-comp is printing allDevs ***', this.allDevs);
    this.startNewEmail();
    console.log('*** this is this.email ***', this.email);
  }

  startNewEmail() {
    this.email = {'to': '', 'subject': '', 'body': ''};
  }
}
