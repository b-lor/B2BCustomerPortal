import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { User } from './user.model.admin';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  selectedUser = new User();

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' })};

  constructor(private http: HttpClient) { }

  // getUsers() {
  //   return this.http.get(environment.apiBaseUrl + '/user', this.noAuthHeader).pipe(map((response: any) =>
  //     response.map(user => new User().deserialize(user)))
  //   );
  // }
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

  getUsers() : Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/user', httpOptions).pipe(map(this.userData),
      catchError(this.handleError));
  }

  getUser(id): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/user/' + id, httpOptions).pipe(map(this.userData),
      catchError(this.handleError));
  }

  updateUser(id, user): Observable<any> {
    return this.http.put(environment.apiBaseUrl + '/user/' + id, user, httpOptions).pipe(
      catchError(this.handleError)
      );
  }

  deleteUser(id): Observable<any> {
    console.log("client service file: " + id);

    return this.http.delete(environment.apiBaseUrl + '/user/' + id, httpOptions).pipe(
      catchError(this.handleError)
      );
  }

  addUser(user): Observable<any>  {
    return this.http.post(environment.apiBaseUrl + '/user/', user, httpOptions).pipe(
      catchError(this.handleError)
      );
  }


  
}
