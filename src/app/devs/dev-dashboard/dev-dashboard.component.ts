import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Dev } from '../../dev';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['../../bootstrap.css', './dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {

  myInfo: any = {};
  displayEditBox = false;
  temp = { newPW: '', id: '' };

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {
    if (this.appService.signedIn) {
      this.appService.getOneDev(this.appService.signedIn)
          .subscribe(dev => {
            this.myInfo = dev;
          });
    } else {
      this.router.navigateByUrl('/');
    }
  }

  submitEdit() {
    // code
    console.log('***** you clicked submitEdit() *****');
    console.log(this.temp);
  }

  showEditBioForm() {
    // code
    console.log('***** you clicked showEditBioForm ******');
    this.displayEditBox = !this.displayEditBox;
  }
}
