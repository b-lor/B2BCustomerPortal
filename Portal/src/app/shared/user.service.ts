import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // selectedUser: User = {
  //   _id: '',
  //   roleId: null,
  //   userType: '',
  //   salesCode:null,
  //   customerNumber:null,
  //   email: '',
  //   password: ''
  // };

  selectedUser = new User();

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' })};

  constructor(private http: HttpClient) { }

    // HttpMethods

    postUser(user: User) {
      return this.http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);
    }

    login(authCredentials) {
      return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }

    getUserProfile() {
      return this.http.get(environment.apiBaseUrl + '/userProfile');
    }
///////////////////////////////

    getUsers() {
      return this.http.get(environment.apiBaseUrl + '/user/', this.noAuthHeader).pipe(map((response: any) =>
        response.map(user => new User().deserialize(user)))
      );
    }
  
    getUser(id): Observable<User> {
      return this.http.get(environment.apiBaseUrl + '/user/' + id, this.noAuthHeader).pipe(map((response: any) => new User().deserialize(response)));
    }
  
    addUser(user) {
      return this.http.post(environment.apiBaseUrl + '/user/', user, this.noAuthHeader);
    }
    
    updateUser(id, user) {
      console.log('service file');
      return this.http.put(environment.apiBaseUrl + '/user/' + id, user, this.noAuthHeader);
    }
  
    deleteUser(id) {
      console.log("client service file: " + id);
  
      return this.http.delete(environment.apiBaseUrl + '/user/' + id, this.noAuthHeader);
    }

    ////////////////////////////

    // Helper
    setToken(token: string) {
      localStorage.setItem('token', token);
    }

    getToken() {
      return localStorage.getItem('token');
    }

    deleteToken() {
      localStorage.removeItem('token');
    }

    getUserPayload() {
      const token = this.getToken();
      if (token) {
        const userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      } else {
        return null;
      }
    }



    isLoggedIn() {
      const userPayload = this.getUserPayload();
      if (userPayload) {
        return userPayload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }


    getRoleId() {
      const token = this.getToken();
      if (token) {
        const roleId = atob(token.split('.')[1]);
        const userId = JSON.parse(roleId);
        return userId['roleId'];
      } else {
        return null;
      }
    }


}
