import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Tracker } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
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

  // HttpMethods

  getTrackers() {
    return this.http
      .get(environment.apiBaseUrl + '/tracker/', this.noAuthHeader)
      .pipe(
        map((response: any) =>
          response.map(transaction => new Tracker().deserialize(transaction))
        )
      );
  }

  getTracker(id): Observable<any> {
    return this.http
      .get(environment.apiBaseUrl + '/tracker/' + id, httpOptions)
      .pipe(
        map(this.userData),
        catchError(this.handleError)
      );
  }

  addTracker(tracker) {
    return this.http.post(
      environment.apiBaseUrl + '/tracker/',
      tracker,
      this.noAuthHeader
    );
  }

  deleteTracker(id) {
    return this.http.delete(
      environment.apiBaseUrl + '/tracker/' + id,
      this.noAuthHeader
    );
  }

  updateTracker(id, tracker) {
    console.log('service file');
    return this.http.put(
      environment.apiBaseUrl + '/tracker/' + id,
      tracker,
      this.noAuthHeader
    );
  }

  getCustomerTracker(id) {
    return this.http
      .get(environment.apiBaseUrl + '/tracker/ticket/' + id, this.noAuthHeader)
      .pipe(
        map((response: any) =>
          response.map(tracker => new Tracker().deserialize(tracker))
        )
      );
  }
}
