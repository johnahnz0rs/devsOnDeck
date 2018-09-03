import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';

@Component({
  selector: 'app-org-add-job',
  templateUrl: './org-add-job.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css', './org-add-job.component.css']
})
export class OrgAddJobComponent implements OnInit {

  newJob: Job = new Job();

  constructor() { }

  ngOnInit() {
  }

}
