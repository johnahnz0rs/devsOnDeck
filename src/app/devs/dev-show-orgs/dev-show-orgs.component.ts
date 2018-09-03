import { Component, OnInit } from '@angular/core';
import { OrgService } from '../../services/org.service';

@Component({
  selector: 'app-dev-show-orgs',
  templateUrl: './dev-show-orgs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './dev-show-orgs.component.css']
})
export class DevShowOrgsComponent implements OnInit {

  allOrgs;

  constructor(
    private orgService: OrgService
  ) { }

  ngOnInit() {
    this.orgService.readAllOrgs().subscribe(response => { this.allOrgs = response; });
  }

  keys(obj) {
    return Object.keys(obj);
  }

  printAllOrgs() {
    console.log('*** dev-show-orgs-comp is printing allOrgs ***', this.allOrgs);
  }

}