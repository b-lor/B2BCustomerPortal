import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs';

import { Profile } from '../shared/profile.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    _id: '',
    roleId: null,
    email: '',
    password: ''
  };
  // selectedUser = new User();

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



    // getUser(id): Observable<any> {
    //   return this.http.get(environment.apiBaseUrl + '/user/' + id, httpOptions).pipe(map(this.userData),
    //     catchError(this.handleError));
    // }


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

    getLoginId() {
      const token = this.getToken();
      if (token) {
        const _id = atob(token.split('.')[1]);
        const LoginUserId = JSON.parse(_id);
        return LoginUserId['_id'];
      } else {
        return null;
      }
    }


    getProfileId() {
      const token = this.getToken();
      if (token) {
        const profile = atob(token.split('.')[1]);
        const profileId = JSON.parse(profile);
        return profileId['profile'];
      } else {
        return null;
      }
    }

}
