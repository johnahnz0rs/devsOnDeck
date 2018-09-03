import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of as observableOf } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io';

  public user;

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    console.log('*** loginService.getUser() is returning this.user ***', this.user);
    return observableOf(this.user);
  }

  login(data) {
    return this.http.post<any>('/api/login', data);
  }

}
