import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Dev} from '../../dev';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['./dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {

    userId: string;
    userInfo: any = {};
    displayEditBox = false;
    temp: Dev = new Dev();

  constructor(private appService: AppService) { }

  ngOnInit() {
      this.userId = this.appService.signedIn;
      this.appService.getOneDev(this.userId)
          .subscribe(dev => {
          console.log('***** typeof dev *****', typeof dev, dev);
          this.userInfo = dev;
          this.temp = dev;
      });
  }

  submitEdit() {
      // code
      console.log('***** you clicked submitEdit() *****');

  }

  editMyInfo() {
      // code
      console.log('***** you clicked editMyInfo() ******');
      this.displayEditBox = !this.displayEditBox;
  }

}
