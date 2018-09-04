import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  allDevs;

  testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/home-devs';

  constructor(private http: HttpClient) { }

  createNewDev(dev): Observable<any> {
    console.log('*** devService is creating one dev(dev) ***', dev);
    // return this.http.post<any>('/api/home-devs', dev);
    return this.http.post<any>(`${this.testAPI}`, dev);
  }

  readAllDevs(): Observable<any> {
    console.log('*** devService is reading all devs ***');
    this.http.get<any>('/api/devs').subscribe(devs => {
      console.log(devs);
      this.allDevs = devs;
    });
    return this.http.get<any>('/api/devs');
  }

  readOneDev(id): Observable<any> {
    console.log('*** READ devService.getOneDev(id) ***', id);
    // return this.http.get<any>(`/api/devs/${id}`);
    return this.http.get<any>(`${this.testAPI}/${id}`);
  }

  updateOneDev(id, data): Observable<any> {
    // return this.http.put<any>(`/api/devs/${id}`, data);
    return this.http.put<any>(`${this.testAPI}/${id}`, data);
  }

  destroyOneDev(id): Observable<any> {
    // return this.http.delete<any>(`/api/home-devs/${id}`);
    return this.http.delete<any>(`${this.testAPI}/${id}`);
  }
}
