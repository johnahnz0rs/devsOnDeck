import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of as observableOf } from 'rxjs';
import { User } from "../user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io';

  public user: User;
  private _quickSignUp = new BehaviorSubject(new User());
  public quickSignUp = this._quickSignUp.asObservable();

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

  thisIsQuickSignUp(thing) {
    this._quickSignUp.next(thing);
    console.log('*** loginService received quickSignUp ***', this._quickSignUp);
  }

}
