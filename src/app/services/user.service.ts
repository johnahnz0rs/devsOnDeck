import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/orgs';

  constructor(
    private http: HttpClient
  ) { }

  testPrint(thing) {
    console.log('*** this is userService.testPrint(thing) ***', thing);
  }

  createOneUser(user): Observable<any> {
    console.log('*** userService is creating one user ***', user);
    return this.http.post<any>('/api/users', user);
  }

  getAllDevs(): Observable<any> {
    console.log('*** userService is getting all devs ***');
    return this.http.get<any>('/api/devs');
  }

  getAllOrgs(): Observable<any> {
    console.log('*** userService is getting all orgs ***');
    return this.http.get<any>('/api/orgs');
  }

  getOneUser(id): Observable<any> {
    console.log('*** userService is getting one user (id) ***', id);
    return this.http.get<any>(`/api/users/${id}`);
  }




  getOneOrg(id): Observable<any> {
    console.log(`*** READ orgService.getOneOrg(${id}) ***`);
    // return this.http.get<any>(`/api/orgs/${id}`);
    return this.http.get<any>(`${this.testAPI}/${id}`);
  }

  updateOneOrg(id, data): Observable<any> {
    console.log(`UPDATE orgService.updateOneOrg(${id}) ***`);
    // return this.http.put<any>(`/api/home-devs/${id}`, data);
    return this.http.put<any>(`${this.testAPI}/${id}`, data);
  }

  deleteOneOrg(id): Observable<any> {
    console.log(`DELETE orgService.deleteOneOrg(${id})`);
    // return this.http.delete<any>(`/api/home-devs/${id}`);
    return this.http.delete<any>(`${this.testAPI}/${id}`);
  }
}
