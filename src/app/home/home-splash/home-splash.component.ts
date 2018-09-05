import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-splash',
  templateUrl: './home-splash.component.html',
  styleUrls: ['../../../reset.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-splash.component.css']
})

export class HomeSplashComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getUser()
      .subscribe(user => {
        if (user) {
          if (user.accountType === 'dev') {
            console.log('*** splash! its a dev! ***', user);
            this.router.navigateByUrl('/dev');
          } else if (user.accountType === 'org') {
            console.log('*** splash! its an org! ***', user);
            this.router.navigateByUrl('/org');
          } else {
            console.log('*** splash, this is user? ***', user);
          }
        } else {
          console.log('*** jabroni splash ***');
        }
      });
  }

}
