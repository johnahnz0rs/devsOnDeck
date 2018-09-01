import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { Job } from '../job';
import { Dev } from '../dev';
import { Org } from '../org';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  private baseDev = '/api/dev';
  private baseJob = '/api/job';
  private baseOrg = '/api/org';
  private baseLogin = '/api/login';
  signedIn: BehaviorSubject<any> = null;


  // Jobs: <any> = this.http.get('api/job');
  private Jobs = new BehaviorSubject<any>([]);
  private Devs = new BehaviorSubject<any>([]);
  private Orgs = new BehaviorSubject<any>([]);
  public allJobs = this.Jobs.asObservable();
  public allDevs = this.Devs.asObservable();
  public allOrgs = this.Orgs.asObservable();

  constructor(private http: HttpClient, private router: Router) {}


  login(login) {
    console.log('*** appService.login() ***');
    return this.http.post<any>(this.baseLogin, login);
  }





  // getAllPets(): Observable<any> {
  //   console.log('***** petService is getting all pets *****');
  //   return this.http.get<any>(this.base);
  // }

  //
  // login(data): Observable<any> {
  //     console.log('***** service.login(email, pw) *****', data);
  //     return this.http.post<any>(this.baseLogin, data);
  // }

  // getAllData() {
  //   this.http.get(`${this.baseJob}`).subscribe(jobs => {
  //     this.Jobs = jobs;
  //   });
  //   this.http.get(`${this.baseDev}`).subscribe(devs => {
  //     this.Devs = devs;
  //   })
  // }
  //
  // logout() {
  //     this.signedIn = null;
  //     console.log('***** you are logged out *****', this.signedIn);
  //     this.router.navigateByUrl('/');
  // }

  // ******************
  // ***** CREATE *****
  // ******************

  // createOneDev(dev): Observable<any> {
  //   console.log('***** service.createOneDev(dev) *****', dev);
  //   return this.http.post<any>(this.baseDev, dev);
  // }
  //
  // createOneJob(job): Observable<any> {
  //   // code
  //   console.log('***** service.createOneJob(job) *****', job);
  //   return this.http.post<any>(this.baseJob, job);
  // }
  //
  // createOneOrg(org): Observable<any> {
  //   console.log('***** service.createOneOrg(org) *****', org);
  //   return this.http.post<any>(this.baseOrg, org);
  // }
  //
  // // ****************
  // // ***** READ *****
  // // ****************
  //

  getAllJobs() {
    console.log('***** service.getAllJobs() *****');
    return this.http.get<any>(this.baseJob);
  }

  getAllDevs(): Observable<any> {
    console.log('***** service.getAllDevs() *****');
    // this.Devs = this.http.get<Array<Dev>>(this.baseDev);
    return this.http.get<Array<Dev>>(this.baseDev);
  }

  getAllOrgs(): Observable<any> {
      console.log('***** service.getAllOrgs() *****');
      return this.http.get<any>(this.baseOrg);
  }

  // getOneDev(id): Observable<any> {
  //   console.log('***** service.getOneDev(id) *****', id);
  //   console.log('***** service.getOneDev() received this from back-end *****', this.http.get<any>(`${this.baseDev}/${id}`));
  //   return this.http.get<any>(`${this.baseDev}/${id}`);
  // }
  //
  // getOneJob(id): Observable<any> {
  //   console.log('*** service.getOneJob(id ***', id);
  //   console.log('*** service.getOneJob() received this form back-end ***', this.http.get<any>(`${this.baseJob}/${id}`));
  //   return this.http.get<any>(`${this.baseJob}/${id}`);
  // }
  //
  // getOneOrg(id): Observable<any> {
  //   console.log('*** service.getOneOrg(id ***', id);
  //   console.log('*** service.getOneOrg() received this form back-end ***', this.http.get<any>(`${this.baseOrg}/${id}`));
  //   return this.http.get<any>(`${this.baseOrg}/${id}`);
  // }
  //
  // // ******************
  // // ***** UPDATE *****
  // // ******************
  //
  // updateOneDev() {
  //   // code
  // }
  //
  // updateOneJob() {
  //   // code
  // }
  //
  // updateOneOrg() {
  //   // code
  // }
  //
  // // ********************
  // // ***** DELETE *******
  // // ********************
  //
  // deleteOneDev() {
  //   // code
  // }
  //
  // deleteOneJob() {
  //   // code
  // }
  //
  // deleteOneOrg() {
  //   // code
  // }
}
