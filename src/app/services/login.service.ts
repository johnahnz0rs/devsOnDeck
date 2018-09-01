import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  testAPI = 'http(s)://5b8af02d78169a0014daacf8.mockapi.io/';

  constructor(private http: HttpClient) { }

  // login(login): Observable<any> {
  //   console.log('*** appService.login() ***');
  //   return this.http.post<any>('/api/login', login);
  // }

  loginDev(dev): Observable<any> {
    // return this.http.post()
    return;
  }

  loginOrg(org): Observable<any> {
    return;
  }

}
