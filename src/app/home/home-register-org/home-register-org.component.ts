import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Org } from '../../org';
import { UserService } from '../../services/user.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home-register-org',
  templateUrl: './home-register-org.component.html',
  styleUrls: ['../../bootstrap.css', './home-register-org.component.css']
})
export class HomeRegisterOrgComponent implements OnInit {

  createOrg = {};

  newOrg: Org = new Org();

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submitCreateOrg() {

      const newOrg = {
          accountType: 'org',
          email: this.newOrg.email,
          pw: this.newOrg.pw,
          orgName: this.newOrg.orgName,
          fname: this.newOrg.fname,
          lname: this.newOrg.lname,
          address: this.newOrg.address,
          city: this.newOrg.city,
          state: this.newOrg.state,
          zip: this.newOrg.zip
      };

      console.log('*** you clicked createNewOrg(org) ***', newOrg);

      this.userService.createOneUser(newOrg)
        .subscribe(response => {
          console.log('*** created one user, and this is the response ***', response);
        });
  }

}
