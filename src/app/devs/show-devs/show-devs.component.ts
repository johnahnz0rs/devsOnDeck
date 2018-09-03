import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';

@Component({
  selector: 'app-show-devs',
  templateUrl: './show-devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './show-devs.component.css']
})
export class ShowDevsComponent implements OnInit {

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
    console.log('*** show-devs-comp is printing allDevs ***', this.allDevs);
  }
}
