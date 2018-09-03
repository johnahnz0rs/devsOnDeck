import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';


@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './devs.component.css']
})
export class DevsComponent implements OnInit {

  allDevs;
  constructor(private devService: DevService) { }

  ngOnInit() {
    this.allDevs = [];

    this.devService.readAllDevs().subscribe(allDevs => { this.allDevs = allDevs; });
  }

  printAllDevs() {
    console.log(this.allDevs);
  }

  keys(object) {
    return Object.keys(object);
  }

}
