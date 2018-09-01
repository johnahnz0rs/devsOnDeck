import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrgService {

  testAPI = 'http(s)://5b8af02d78169a0014daacf8.mockapi.io/orgs';

  constructor(private http: HttpClient) { }

  createNewOrg(org): Observable<any> {
    console.log(`*** CREATE orgService.createNewOrg(${org}) ***`);
    // return this.http.post<any>('/api/devs', dev);
    return this.http.post<any>(`${this.testAPI}`, org);
  }

  readAllOrgs(): Observable<any> {
    console.log('*** READ orgService.getAllOrgs() ***');
    // return this.http.get<any>('/api/devs');
    return this.http.get<any>(`${this.testAPI}`);
  }

  readOneOrg(id): Observable<any> {
    console.log(`*** READ orgService.getOneOrg(${id}) ***`);
    // return this.http.get<any>(`/api/devs/${id}`);
    return this.http.get<any>(`${this.testAPI}/${id}`);
  }

  updateOneOrg(id, data): Observable<any> {
    console.log(`UPDATE orgService.updateOneOrg(${id}) ***`);
    // return this.http.put<any>(`/api/devs/${id}`, data);
    return this.http.put<any>(`${this.testAPI}/${id}`, data);
  }

  deleteOneOrg(id): Observable<any> {
    console.log(`DELETE orgService.deleteOneOrg(${id})`);
    // return this.http.delete<any>(`/api/devs/${id}`);
    return this.http.delete<any>(`${this.testAPI}/${id}`);
  }
}
