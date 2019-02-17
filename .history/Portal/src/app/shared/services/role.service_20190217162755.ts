import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Role } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  selectedRole = new Role();

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

  private roleData(res: Response) {
    const body = res;
    return body || {};
  }

  getRoles(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/role/', httpOptions).pipe(
      map(this.roleData),
      catchError(this.handleError)
    );
  }
  getRole(id): Observable<any> {
    return this.http
      .get(environment.apiBaseUrl + '/role/' + id, httpOptions)
      .pipe(
        map(this.roleData),
        catchError(this.handleError)
      );
  }
  addRole(role): Observable<any> {
    return this.http
      .post(environment.apiBaseUrl + '/role/', role, httpOptions)
      .pipe(catchError(this.handleError));
  }
  deleteRole(id): Observable<any> {
    return this.http
      .delete(environment.apiBaseUrl + '/role/' + id, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateRole(id, role): Observable<any> {
    return this.http
      .put(environment.apiBaseUrl + '/role/' + id, role, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
