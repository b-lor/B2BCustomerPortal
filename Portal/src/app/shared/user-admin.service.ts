import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { User } from './user.model.admin';
import { Observable, of, throwError } from 'rxjs';

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
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUsers() : Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/user').pipe(
      map(this.extractData),
      catchError(this.handleError));
    
  
  }
  // getUsers() {
  //   this.httpProvider.getJsonData().subscribe(
  //     result => {
  //       this.jsonData=result; 
  //       console.log("Success : "+this.jsonData); 
  //     },
  //     err =>{
  //       console.error("Error : "+err);
  //     }
  //   );
  // }

  // getUsers() {
  //   return this.http.get(environment.apiBaseUrl + '/user');
  // }

  
}
