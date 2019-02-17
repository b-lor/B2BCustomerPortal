import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Profile } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  selectedProfile = new Profile();

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private userData(res: Response) {
    const body = res;
    return body || {};
  }

  getProfiles(): Observable<any> {
    return this.http
      .get(environment.apiBaseUrl + '/profile/', httpOptions)
      .pipe(
        map(this.userData),
        catchError(this.handleError)
      );
  }

  getProfile(id): Observable<any> {
    return this.http
      .get(environment.apiBaseUrl + '/profile/' + id, httpOptions)
      .pipe(
        map(this.userData),
        catchError(this.handleError)
      );
  }

  addProfile(profile): Observable<any> {
    return this.http
      .post(environment.apiBaseUrl + '/profile/', profile, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteProfile(id): Observable<any> {
    return this.http
      .delete(environment.apiBaseUrl + '/profile/' + id, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateProfile(id, profile): Observable<any> {
    return this.http
      .put(environment.apiBaseUrl + '/profile/' + id, profile, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getUsersProfile(id) {
    return this.http.get(
      environment.apiBaseUrl + '/user/' + id,
      this.noAuthHeader
    );
  }
}
