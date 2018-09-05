import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-home-register-org',
  templateUrl: './home-register-org.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './home-register-org.component.css']
})
export class HomeRegisterOrgComponent implements OnInit {

  createOrg = {};

  newOrg: User = new User();

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submitCreateOrg() {
    this.newOrg.accountType = 'org';

    console.log('*** you clicked createNewOrg(org) ***', this.newOrg);

    this.userService.createOneUser(this.newOrg)
      .subscribe(response => {
        console.log('*** created one user, and this is the response ***', response);
      });
  }

}
