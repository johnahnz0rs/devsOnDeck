import { Component, OnInit } from '@angular/core';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';
import { UserService } from '../../services/user.service';
import { User } from '../../user';


@Component({
  selector: 'app-home-devs',
  templateUrl: './home-devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-devs.component.css']
})
export class HomeDevsComponent implements OnInit {

  allDevs: Array<User>;
  selectedDev: User;

  constructor(
    private userService: UserService,
    private homeDash: HomeDashboardComponent
  ) { }

  ngOnInit() {
    this.userService.getAllDevs();
    this.userService.allDevs.subscribe(allDevs => { this.allDevs = allDevs; });
  }

  keys(object) {
    return Object.keys(object);
  }

  selectDev(dev) {
    this.selectedDev = dev;
  }

  register(str) {
    this.homeDash.displayThisComp = `register-${str}`;
  }
}
