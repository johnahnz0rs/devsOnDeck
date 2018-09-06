import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of as observableOf } from 'rxjs';
import { User } from '../user';
import { Login } from '../login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io';

  private _user = new BehaviorSubject(new User());
  public user = this._user.asObservable();
  private _quickSignUp = new BehaviorSubject(new User());
  public quickSignUp = this._quickSignUp.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    console.log('*** loginService.getUser() is returning this.user ***', this.user);
    return observableOf(this.user);
  }

  logMeIn(data): Observable<any> {
    console.log('*** loginService is about to log this user in ***', data);
    this.http.post<any>('/api/login', data)
      .subscribe(response => {
        this._user = response;
      });
    return this.http.post<any>('/api/login', data);
  }

  thisIsQuickSignUp(thing) {
    this._quickSignUp.next(thing);
    console.log('*** loginService received quickSignUp ***', this._quickSignUp);
  }

  thisIsUser(thing) {
    this._user.next(thing);
    console.log('*** loginService received loggedInUser ***', this._user);
  }

  registerMe(data): Observable<any> {
    console.log('*** loginService is submitting this user for registration ***', data);
    // this call returns an _id;
    return this.http.post<any>('/api/users', data);
  }

  isUserDevOrOrg(id): Observable<any> {
    return this.http.get(`/users/${id}`);
  }

}
