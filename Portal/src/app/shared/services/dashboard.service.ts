import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Ticket } from '../models';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


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

  private dashboardData(res: Response) {
    const body = res;
    return body || {};
  }

  getGeneral(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/dashboard/general', httpOptions).pipe(
      map(this.dashboardData),
      catchError(this.handleError)
    );
  }

  getBilling(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/dashboard/billing', httpOptions).pipe(
      map(this.dashboardData),
      catchError(this.handleError)
    );
  }

  getOnline(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/dashboard/online', httpOptions).pipe(
      map(this.dashboardData),
      catchError(this.handleError)
    );
  }

  getOther(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/dashboard/other', httpOptions).pipe(
      map(this.dashboardData),
      catchError(this.handleError)
    );
  }

  getShipping(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/dashboard/shipping', httpOptions).pipe(
      map(this.dashboardData),
      catchError(this.handleError)
    );
  }

//   getRole(id): Observable<any> {
//     return this.http
//       .get(environment.apiBaseUrl + '/role/' + id, httpOptions)
//       .pipe(
//         map(this.dashboardData),
//         catchError(this.handleError)
//       );
//   }
}
