import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseDev = '/api/dev';
  private baseJob = '/api/job';
  private baseOrg = '/api/org';

  constructor(private http: HttpClient) {}

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

  login() {
    // code
  }

  getAllDevs() {
    // code
  }

  getAllJobs() {
    // code
  }

  getAllOrgs() {}

  getOneDev() {}

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
