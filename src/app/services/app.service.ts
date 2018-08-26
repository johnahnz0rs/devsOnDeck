import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  private baseDev = '/api/dev';
  private baseJob = '/api/job';
  private baseOrg = '/api/org';
  private baseLogin = '/api/login';
  signedIn: any;
  allJobs: Array<any>;
  allOrgs: Array<any>;
  allDevs: Array<any>;

  constructor(private http: HttpClient, private router: Router) {}

  login(data): Observable<any> {
      console.log('***** service.login(email, pw) *****', data);
      return this.http.post<any>(this.baseLogin, data);
  }

  logout() {
      this.signedIn = null;
      console.log('***** you are logged out *****', this.signedIn);
      this.router.navigateByUrl('/');
  }

  // ******************
  // ***** CREATE *****
  // ******************

  createOneDev(dev): Observable<any> {
    console.log('***** service.createOneDev(dev) *****', dev);
    return this.http.post<any>(this.baseDev, dev);
  }

  createOneJob(job): Observable<any> {
    // code
    console.log('***** service.createOneJob(job) *****', job);
    return this.http.post<any>(this.baseJob, job);
  }

  createOneOrg(org): Observable<any> {
    console.log('***** service.createOneOrg(org) *****', org);
    return this.http.post<any>(this.baseOrg, org);
  }

  // ****************
  // ***** READ *****
  // ****************

  getAllDevs() {
    console.log('***** service.getAllDevs() *****');
    return this.http.get<any>(this.baseDev);
  }

  getAllJobs() {
      console.log('***** service.getAllJobs() *****');
      return this.http.get<any>(this.baseJob);
  }

  getAllOrgs(): Observable<any> {
      console.log('***** service.getAllOrgs() *****');
      return this.http.get<any>(this.baseOrg);
  }

  getOneDev(id): Observable<any> {
    console.log('***** service.getOneDev(id) *****', id);
    console.log('***** service.getOneDev() received this from back-end *****', this.http.get<any>(`${this.baseDev}/${id}`));
    return this.http.get<any>(`${this.baseDev}/${id}`);
  }

  getOneJob(id): Observable<any> {
    console.log('*** service.getOneJob(id ***', id);
    console.log('*** service.getOneJob() received this form back-end ***', this.http.get<any>(`${this.baseJob}/${id}`));
    return this.http.get<any>(`${this.baseJob}/${id}`);
  }

  getOneOrg(id): Observable<any> {
    console.log('*** service.getOneOrg(id ***', id);
    console.log('*** service.getOneOrg() received this form back-end ***', this.http.get<any>(`${this.baseOrg}/${id}`));
    return this.http.get<any>(`${this.baseOrg}/${id}`);
  }

  // ******************
  // ***** UPDATE *****
  // ******************

  updateOneDev() {
    // code
  }

  updateOneJob() {
    // code
  }

  updateOneOrg() {
    // code
  }

  // ********************
  // ***** DELETE *******
  // ********************

  deleteOneDev() {
    // code
  }

  deleteOneJob() {
    // code
  }

  deleteOneOrg() {
    // code
  }
}
