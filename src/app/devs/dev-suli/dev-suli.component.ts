import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dev } from '../../dev';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-dev-suli',
  templateUrl: './dev-suli.component.html',
  styleUrls: ['../../bootstrap.css', './dev-suli.component.css']
})
export class DevSuliComponent implements OnInit {

    newDev: Dev = new Dev();

    showP1: boolean;
    showP2: boolean;
    showP3: boolean;

    states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
      console.log(this.newDev);
      this.newDev.accountType = 'dev';
      this.showP1 = true;
      this.showP2 = false;
      this.showP3 = false;
  }

  registerDev() {
      console.log(this.newDev);
  }

  showMeP1() {
      this.showP1 = true;
      this.showP2 = false;
      this.showP3 = false;
  }

  showMeP2() {
      this.showP2 = true;
      this.showP1 = false;
      this.showP3 = false;
  }
  showMeP3() {
      this.showP3 = true;
      this.showP1 = false;
      this.showP2 = false;
  }

}
