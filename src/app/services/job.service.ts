import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/home-jobs';

  private _allJobs = new BehaviorSubject([]);
  public allJobs = this._allJobs.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  // certified
  getAllJobs() {
    console.log('*** jobService is running getAllJobs() ***');
    this.http.get<any>('/api/jobs').subscribe(response => { this._allJobs.next(response); });
  }

  // certified
  createNewJob(job) {
    console.log('*** jobService is running createNewJob(job) ***', job);
    this.http.post<any>('/api/jobs', job)
      .subscribe(response => { console.log('*** API.createNewJob() response ***', response); });
    // return this.http.post<any>(`${this.testAPI}`, job);
  }

  getMyJobs(id): Observable<any> {
    console.log('*** jobService is running getMyJobs(id) ***', id);
    return this.http.get<any>(`/api/jobsbyorg/${id}`);
  }

  updateOneJob(id, data): Observable<any> {
    console.log(`UPDATE jobService.updateOneJob(${id}) ***`);
    // return this.http.put<any>(`/api/home-devs/${id}`, data);
    return this.http.put<any>(`${this.testAPI}/${id}`, data);
  }

  deleteOneJob(id): Observable<any> {
    console.log(`DELETE jobService.deleteOneJob(${id})`);
    // return this.http.delete<any>(`/api/home-devs/${id}`);
    return this.http.delete<any>(`${this.testAPI}/${id}`);
  }
}
