import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    roleId: null,
    email: '',
    password: ''
  };

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

    getRoleId() {
      const userToken = this.getToken();
      if (userToken) {
        const roleId = atob(userToken.split('.')[2]);
        return JSON.parse(roleId);
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




}
