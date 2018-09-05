import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './test-comp.component.css']
})

export class TestCompComponent implements OnInit {

  quickSignUp: User = new User();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() { }

  testFunc() {
    console.log('*** printing this.testUser ***', this.quickSignUp);
  }

  signUp() {
    console.log('*** about to send this request: createOneUser(user) ***', this.quickSignUp);
    // this.userService.createOneUser(this.quickSignUp);
  }

}
