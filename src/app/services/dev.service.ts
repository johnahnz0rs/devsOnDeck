import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/devs';

  constructor(private http: HttpClient) { }

  createNewDev(dev): Observable<any> {
    console.log('*** CREATE devService.createNewDev(dev) ***', dev);
    // return this.http.post<any>('/api/devs', dev);
    return this.http.post<any>(`${this.testAPI}`, dev);
  }

  readAllDevs(): Observable<any> {
    console.log('*** READ devService.getAllDevs ***');
    // return this.http.get<any>('/api/devs');
    return this.http.get<any>(`${this.testAPI}`);
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
    // return this.http.delete<any>(`/api/devs/${id}`);
    return this.http.delete<any>(`${this.testAPI}/${id}`);
  }
}
