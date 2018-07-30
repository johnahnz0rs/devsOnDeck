import { Component, OnInit } from '@angular/core';
import { Org } from '../../org';
import { Dev } from '../../dev';
import { Job } from '../../job';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.css']
})
export class OrgDashboardComponent implements OnInit {
  devs: Array<Dev> = [];
  constructor(private appService: AppService, private http: HttpClient) {}

  ngOnInit() {
    this.getAllDevs();
  }

  getAllDevs() {
    this.appService.getAllDevs().subscribe(allDevs => {
        console.log('***** this is orgDashboard.getAllDevs() result *****', allDevs);
        console.log(typeof allDevs);
        for (let i of allDevs) {
            this.devs.push(i);
        }
        console.log('***** this.devs *****', this.devs);
    });
  }
}
