import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';

@Component({
  selector: 'app-dev-show-devs',
  templateUrl: './dev-show-devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-show-devs.component.css']
})
export class DevShowDevsComponent implements OnInit {

  allDevs;

  constructor(
    private devService: DevService
  ) { }

  ngOnInit() {
    this.devService.readAllDevs().subscribe(response => { this.allDevs = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllDevs() {
    console.log('*** dev-show-home-devs-comp is printing allDevs ***', this.allDevs);
  }
}
