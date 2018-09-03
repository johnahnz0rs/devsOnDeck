import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { DevService } from './dev.service';
import { OrgService } from './org.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io';

  public user;

  constructor(
    private http: HttpClient,
    private devService: DevService,
    private orgService: OrgService
  ) { }

  getUser() {
    console.log('*** loginService.getUser() is returning this.user ***', this.user);
    return this.user;
  }

  loginDev(dev): Observable<any> {
    // return this.http.post()
    console.log('*** loginService > loginDev(dev) ***', dev);

    // test API
    // const allDevs = this.http.get<any>(`${this.testAPI}/devs`);
    // console.log('*** loginService.loginDev > allDevs = ***', allDevs);
    // return this.user = this.testFindDev(dev, allDevs);
    // console.log('*** loginService.loginDev > this.user = ***', this.user);
    // return this.user;
    // this.http.get<any>(`${this.testAPI}/devs`)
    //   .subscribe(allDevs => {
    //     for (const oneDev of allDevs) {
    //       if (oneDev.email === dev.email) {
    //         this.user = oneDev;
    //         console.log('*** testAPI.loginDev (inside if) logged in ***', this.user);
    //         return this.user;
    //       }
    //     }
    //   });
    // return observableOf(false);
    // console.log('*** testAPI.loginDev (outside if) logged in ***', this.user);
    // return this.user;

    // mongoDB
    return this.http.post<any>('/api/loginDev', dev);

  }

  testLoginDev(id) {
    this.user = this.devService.readOneDev(id);
    console.log('*** loginService.testLoginDev(id) is setting this.user to ***', this.user);
    // this.devService.readOneDev(id)
    //   .subscribe(response => {
    //     this.user = response;
    //     console.log('*** loginService.testLoginDev() is returning user ***', this.user);
    //   });
  }

  testLoginOrg(id) {
    this.user = this.orgService.readOneOrg(id);
    console.log('*** loginService.testLoginOrg(id) is setting this.user to ***', this.user);
    // this.orgService.readOneOrg(id)
    //   .subscribe(response => {
    //     this.user = response;
    //     console.log('*** testLoginOrg() returned user ***', this.user);
    //   });
  }



  loginOrg(org): Observable<any> {
    console.log('*** loginService > loginOrg(org) ***', org);

    // *** test api ***
    const allOrgs = this.http.get<any>(`${this.testAPI}/orgs`);
    this.user = this.testFindOrg(org, allOrgs);
    return this.user;
    // this.http.get<any>(`${this.testAPI}/orgs`)
    //   .subscribe(allOrgs => {
    //     for (const oneOrg of allOrgs) {
    //       if (oneOrg.email === org.email) {
    //         this.user = oneOrg;
    //         console.log('*** testAPI.loginOrg (inside if) logged in ***', this.user);
    //         return this.user;
    //       }
    //     }
    //   });
    // return observableOf(false);
    // console.log('*** testAPI.loginOrg (outside if) logged in ***', this.user);
    // return this.user;

    // *** mongoDB ***
    // return this.http<any>('/api/loginOrg', org);
  }

  testFindOrg(org, allOrgs) {
    for (const oneOrg of allOrgs) {
      if (oneOrg.email === org.email && oneOrg.pw === org.pw) {
        return oneOrg;
      }
    }
  }


}
