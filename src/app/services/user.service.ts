import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/orgs';

  private _quickSignUp = new BehaviorSubject(new User());
  private _user = new BehaviorSubject(new User());
  private _allDevs = new BehaviorSubject([]);
  private _allOrgs = new BehaviorSubject([]);
  private _allJobs = new BehaviorSubject([]);

  public quickSignUp = this._quickSignUp.asObservable();
  public user = this._user.asObservable();
  public allDevs = this._allDevs.asObservable();
  public allOrgs = this._allOrgs.asObservable();
  public allJobs = this._allJobs.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  // i might not need this because the only time i set a user is when i'm logging in,
  // and i log in using func logMeIn() below;
  // setUser(user) {
  //   this._user.next(user);
  // }

  logMeIn(data): Observable<any> {
    console.log('*** userService is about to log this user in ***', data);
    this.http.post<any>('/api/login', data)
      .subscribe(response => {
        this._user.next(response);
      });
    return this.http.post<any>('/api/login', data);
  }

  logout() {
    this._user.next(null);
  }

  getUser(): Observable<any> {
    console.log('*** userService.getUser() is returning this.user ***', this.user);
    return this.user;
  }

  getAllDevs() {
    console.log('*** userService is running getAllDevs() ***');
    this.http.get<any>('/api/devs').subscribe(response => { this._allDevs.next(response); });
  }

  getAllOrgs() {
    console.log('*** userService is running getAllOrgs() ***');
    this.http.get<any>('/api/orgs').subscribe(response => { this._allOrgs.next(response); });
  }

  getAllJobs() {
    console.log('*** userService is running getAllJobs() ***');
    this.http.get<any>('/api/jobs').subscribe(response => { this._allJobs.next(response); });
  }

  setQuickSignUp(signup) {
    this._quickSignUp.next(signup);
    console.log('*** userService received quickSignUp ***', signup);
    return;
  }

  thisIsUser(user) {
    this._user.next(user);
    console.log('*** userService received user ***', user);
    return;
  }

  // below are methods ver 1.0;
  // ;

  testPrint(thing) {
    console.log('*** this is userService.testPrint(thing) ***', thing);
  }

  createOneUser(user): Observable<any> {
    console.log('*** userService is creating one user ***', user);
    return this.http.post<any>('/api/users', user);
  }

  getOneUser(id): Observable<any> {
    console.log('*** userService is getting one user (id) ***', id);
    return this.http.get<any>(`/api/users/${id}`);
  }

  getOneOrg(id): Observable<any> {
    console.log(`*** userService.getOneOrg(${id}) ***`);
    // return this.http.get<any>(`/api/orgs/${id}`);
    return this.http.get<any>(`/api/orgs/${id}`);
  }

  updateOneOrg(id, data): Observable<any> {
    console.log(`UPDATE orgService.updateOneOrg(${id}) ***`);
    // return this.http.put<any>(`/api/home-devs/${id}`, data);
    return this.http.put<any>(`/api/orgs/${id}`, data);
  }

  deleteOneOrg(id): Observable<any> {
    console.log(`DELETE orgService.deleteOneOrg(${id})`);
    // return this.http.delete<any>(`/api/home-devs/${id}`);
    return this.http.delete<any>(`/api/orgs/${id}`);
  }
}
