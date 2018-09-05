import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-signup',
  templateUrl: './home-signup.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-signup.component.css']
})

export class HomeSignupComponent implements OnInit {

  quickSignUp: User = new User();

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() { }

  signUpForReal() {
    console.log('*** about to send this request: createOneUser(user) ***', this.quickSignUp);
    this.userService.createOneUser(this.quickSignUp)
      .subscribe(response => {
        if (response.accountType) {
          this.loginService.user = response;
          if (response.accountType === 'dev') {
            this.router.navigateByUrl('/dev');
          } else if (response.accountType === 'org') {
            this.router.navigateByUrl('/org');
          }
        }
      });
  }

}
