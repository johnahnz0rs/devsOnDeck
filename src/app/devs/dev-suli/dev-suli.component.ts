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

    states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
      console.log(this.newDev);
  }

  registerDev() {
      console.log(this.newDev);
  }

}
