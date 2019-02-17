import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { DateSearch } from '../';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  selectedDate: DateSearch = {
    fromDate: '',
    toDate: ''
  };

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

  searchDate(dateSearch: DateSearch) {
    return this.http.post(
      environment.apiBaseUrl + '/search/ticket/date',
      dateSearch,
      this.noAuthHeader
    );
  }
}
