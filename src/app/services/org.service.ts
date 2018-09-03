import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrgService {

  testAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/orgs';
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(
    private http: HttpClient
  ) { }

  createNewOrg(org) {
    console.log('*** orgService is running createNewOrg(org) ***', org);

    this.http.post<any>('/api/orgs', org)
      .subscribe(response => { console.log('*** API.createNewOrg() response ***', response); });
  }

  testCreateNewOrg(org) {
    console.log('*** orgService.testCreateNewOrg(org) ***', org);
    return this.http.post<any>(`${this.testAPI}`, org);
  }

  readAllOrgs(): Observable<any> {
    console.log('*** READ orgService.getAllOrgs() ***');
    return this.http.get<any>('/api/orgs');
    // return this.http.get<any>(`${this.testAPI}`);
  }

  readOneOrg(id): Observable<any> {
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
