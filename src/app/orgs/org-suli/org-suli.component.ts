import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Org } from '../../org';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-org-suli',
  templateUrl: './org-suli.component.html',
  styleUrls: ['../../bootstrap.css', './org-suli.component.css']
})
export class OrgSuliComponent implements OnInit {

    newOrg: Org = new Org();

    states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
      // this.newOrg.accountType = 'org';
  }

  registerOrg() {
      console.log('***** registerOrg(this.newOrg)', this.newOrg, '*****');

      const org = {
          accountType: 'org',
          orgname: this.newOrg.orgName,
          fname: this.newOrg.fname,
          lname: this.newOrg.lname,
          address: this.newOrg.address,
          city: this.newOrg.city,
          state: this.newOrg.state,
          zip: this.newOrg.zip,
          email: this.newOrg.email,
          pw: this.newOrg.pw,
      };
      this.appService.createOneOrg(org);
  }

}
