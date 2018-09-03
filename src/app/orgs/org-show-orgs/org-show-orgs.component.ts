import { Component, OnInit } from '@angular/core';
import { OrgService } from '../../services/org.service';

@Component({
  selector: 'app-org-show-orgs',
  templateUrl: './org-show-orgs.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-show-orgs.component.css']
})
export class OrgShowOrgsComponent implements OnInit {

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
    console.log('*** show-orgs-comp is printing allOrgs ***', this.allOrgs);
  }

}
