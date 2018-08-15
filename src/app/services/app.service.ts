import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseDev = '/api/dev';
  private baseJob = '/api/job';
  private baseOrg = '/api/org';
  private baseLogin = '/api/login';
  signedIn: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(data) {
      console.log('***** service.login(email, pw) *****', data);
      return this.http.post<any>(this.baseLogin, data);
  }

  logout() {
      this.signedIn = null;
      this.router.navigateByUrl('/');
  }

  // ******************
  // ***** CREATE *****
  // ******************

  createOneDev(dev): Observable<any> {
    console.log('***** service.createOneDev(dev) *****', dev);
    return this.http.post<any>(this.baseDev, dev);
  }

  createOneJob(job) {
    // code
    console.log('***** service.createOneBob(job) *****', job);
    return this.http.post<any>(this.baseJob, job);
  }

  createOneOrg(org) {
    console.log('***** service.createOneOrg(org) *****', org);
    return this.http.post<any>(this.baseOrg, org);
  }

  // ****************
  // ***** READ *****
  // ****************

  getAllDevs() {
    // code
    console.log('***** service.getAllDevs() *****');
    console.log(this.http.get<any>(this.baseDev));
    return this.http.get<any>(this.baseDev);
  }

  getAllJobs() {
    // code
      console.log('***** service.getAllJobs() *****');
      console.log(this.http.get<any>(this.baseJob));
      return this.http.get<any>(this.baseJob);
  }

  getAllOrgs() {
      console.log('***** service.getAllOrgs() *****');
      console.log(this.http.get<any>(this.baseOrg));
      return this.http.get<any>(this.baseOrg);
  }

  getOneDev(id) {
    console.log('***** service.getOneDev(id) *****', id);
    console.log(this.http.get<any>(`${this.baseDev}/${id}`));
    return this.http.get<any>(`${this.baseDev}/${id}`);
  }

  getOneJob() {}

  getOneOrg() {}

  // ******************
  // ***** UPDATE *****
  // ******************

  updateOneDev() {
    //code
  }

  updateOneJob() {
    //code
  }

  updateOneOrg() {
    //code
  }

  // ********************
  // ***** DELETE *******
  // ********************

  deleteOneDev() {
    //code
  }

  deleteOneJob() {
    //code
  }

  deleteOneOrg() {
    //code
  }
}
