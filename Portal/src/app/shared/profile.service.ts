import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { Profile } from './profile.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  selectedProfile: Profile = {
    _id: '',
    customerNumber: null,
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  // selectedProfile = new Profile();

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' })};

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  private userData(res: Response) {
    let body = res;
    return body || { };
  }

  // getProfiles() {
  //   return this.http.get(environment.apiBaseUrl + '/admin/profile', this.noAuthHeader);
  // }

  getProfiles() : Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/profile/', httpOptions).pipe(map(this.userData),
      catchError(this.handleError));
  }

  // getProfile(id) {
  //   return this.http.get(environment.apiBaseUrl + '/profile/' + id, this.noAuthHeader);
  // }

  getProfile(id): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/profile/' + id, httpOptions).pipe(map(this.userData),
      catchError(this.handleError));
  }

  getUsersProfile(id) {
    return this.http.get(environment.apiBaseUrl + 'user/detail/' + id, this.noAuthHeader);
  }

  // addProfile(profile) {
  //   return this.http.post(environment.apiBaseUrl + '/profile/', profile, this.noAuthHeader);
  // }

  addProfile(profile): Observable<any>  {
    return this.http.post(environment.apiBaseUrl + '/profile/', profile, httpOptions).pipe(
      catchError(this.handleError)
      );
  }


  // updateProfile(id, profile) {
  //   console.log('service file');
  //   return this.http.put(environment.apiBaseUrl + '/profile/' + id, profile, this.noAuthHeader);
  // }

  updateProfile(id, profile): Observable<any> {
    return this.http.put(environment.apiBaseUrl + '/profile/' + id, profile, httpOptions).pipe(
      catchError(this.handleError)
      );
  }
  // deleteProfile(id) {
  //   console.log('client service file: ' + id);

  //   return this.http.delete(environment.apiBaseUrl + '/profile/' + id, this.noAuthHeader);
  // }

  
  deleteProfile(id): Observable<any> {
    console.log("client service file: " + id);

    return this.http.delete(environment.apiBaseUrl + '/profile/' + id, httpOptions).pipe(
      catchError(this.handleError)
      );
  }
}
