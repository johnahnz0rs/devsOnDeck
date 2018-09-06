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

  ngOnInit() {}

}
