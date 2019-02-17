import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    _id: '',
    email: '',
    password: ''
  };
  // selectedUser = new User();

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}

  // HttpMethods

  postUser(user: User) {
    return this.http.post(
      environment.apiBaseUrl + '/register',
      user,
      this.noAuthHeader
    );
  }

  login(authCredentials) {
    return this.http.post(
      environment.apiBaseUrl + '/authenticate',
      authCredentials,
      this.noAuthHeader
    );
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

  getDepartment() {
    const token = this.getToken();
    if (token) {
      const department = atob(token.split('.')[1]);
      const departmentID = JSON.parse(department);
      return departmentID['department'];
    } else {
      return null;
    }
  }

  getEmail() {
    const token = this.getToken();
    if (token) {
      const email = atob(token.split('.')[1]);
      const emailId = JSON.parse(email);
      return emailId['email'];
    } else {
      return null;
    }
  }
}
