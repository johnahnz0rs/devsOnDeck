import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/jobs';

  public allJobs;

  constructor(
    private http: HttpClient
  ) { }

  // certified
  createNewJob(job) {
    console.log('*** jobService is running createNewJob(job) ***', job);
    this.http.post<any>('/api/jobs', job)
      .subscribe(response => { console.log('*** API.createNewJob() response ***', response); });
    // return this.http.post<any>(`${this.testAPI}`, job);
  }

  readAllJobs(): Observable<any> {
    console.log('*** jobService is running getAllJobs() ***');
    // return this.http.get<any>('/api/devs');
    this.allJobs = this.http.get<any>('/api/jobs');
    console.log('*** jobService received these jobs ***', this.allJobs);
    return this.http.get<any>('/api/jobs');
    // this.allJobs = this.http.get<any>(`${this.testAPI}`);
  }

  readOneJob(id): Observable<any> {
    console.log('*** jobService is running readOneJob(id) ***', id);
    return this.http.get<any>(`/api/jobs/${id}`);
    // return this.http.get<any>(`${this.testAPI}/${id}`);
  }

  updateOneJob(id, data): Observable<any> {
    console.log(`UPDATE jobService.updateOneJob(${id}) ***`);
    // return this.http.put<any>(`/api/devs/${id}`, data);
    return this.http.put<any>(`${this.testAPI}/${id}`, data);
  }

  deleteOneJob(id): Observable<any> {
    console.log(`DELETE jobService.deleteOneJob(${id})`);
    // return this.http.delete<any>(`/api/devs/${id}`);
    return this.http.delete<any>(`${this.testAPI}/${id}`);
  }
}
