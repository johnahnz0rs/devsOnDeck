import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';

@Component({
  selector: 'app-org-show-devs',
  templateUrl: './org-show-devs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-show-devs.component.css']
})
export class OrgShowDevsComponent implements OnInit {

  allDevs;

  constructor(
    private devService: DevService
  ) { }

  ngOnInit() {
    this.devService.allDevs.subscribe(response => { this.allDevs = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllDevs() {
    console.log('*** show-dev-comp is printing allDevs ***', this.allDevs);
  }

}
