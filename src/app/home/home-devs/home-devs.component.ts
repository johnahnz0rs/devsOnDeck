import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';


@Component({
  selector: 'app-home-devs',
  templateUrl: './home-devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-devs.component.css']
})
export class HomeDevsComponent implements OnInit {

  allDevs;
  selectedDev;

  constructor(
    private devService: DevService,
    private homeDash: HomeDashboardComponent
  ) { }

  ngOnInit() {
    this.devService.readAllDevs().subscribe(allDevs => { this.allDevs = allDevs; });
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
