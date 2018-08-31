import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) {}

  title = 'app';

  logout() {
    // this.appService.logout();
  }
}