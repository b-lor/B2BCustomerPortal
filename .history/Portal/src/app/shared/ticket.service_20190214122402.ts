import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { Ticket } from './ticket.model';
import { User } from './user.model';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

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

   //HttpMethods

   getTickets() {
    return this.http.get(environment.apiBaseUrl + '/ticket/', this.noAuthHeader).pipe(map((response: any) =>
      response.map(transaction => new Ticket().deserialize(transaction)))
    );
  }
  getTicketIssues() {
    return this.http.get(environment.apiBaseUrl + '/ticket/issue', this.noAuthHeader).pipe(map((response: any) =>
      response.map(transaction => new Ticket().deserialize(transaction)))
    );
  }
  getTicket(id): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/ticket/' + id, httpOptions).pipe(map(this.userData),
      catchError(this.handleError));
  }

  addTicket(ticket) {
    return this.http.post(environment.apiBaseUrl + '/ticket/', ticket, this.noAuthHeader);
  }

  deleteTicket(id) {
    return this.http.delete(environment.apiBaseUrl + '/ticket/' + id, this.noAuthHeader);
  }

  updateTicket(id, ticket) {
    console.log('service file');
    return this.http.put(environment.apiBaseUrl + '/ticket/' +id , ticket, this.noAuthHeader);
  }

  getCustomerTicket(id) {
    return this.http.get(environment.apiBaseUrl + '/ticket/customer/' + id, this.noAuthHeader).pipe(map((response: any) =>
      response.map(ticket => new Ticket().deserialize(ticket)))
    );
  }
  openTicketSearch() {
    return this.http.get(environment.apiBaseUrl + '/ticket/open', this.noAuthHeader).pipe(map((response: any) =>
      response.map(transaction => new Ticket().deserialize(transaction)))
    );
  }
  closedTicketSearch() {
    return this.http.get(environment.apiBaseUrl + '/ticket/closed', this.noAuthHeader).pipe(map((response: any) =>
      response.map(transaction => new Ticket().deserialize(transaction)))
    );
  }

}
