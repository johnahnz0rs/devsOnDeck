import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  _login = new BehaviorSubject(new Login());
  login = this._login.asObservable();
  error: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
