import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  selectedProfile: Profile = {
    _id: '',
    customerNumber: null,
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  // selectedProfile = new Profile();

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' })};

  constructor(private http: HttpClient) { }

  getProfiles() {
    return this.http.get(environment.apiBaseUrl + '/admin/profile', this.noAuthHeader);
  }

  // getProfile(id) {
  //   return this.http.get(environment.apiBaseUrl + '/profile/' + id, this.noAuthHeader);
  // }

  // addProfile(profile) {
  //   return this.http.post(environment.apiBaseUrl + '/profile/', profile, this.noAuthHeader);
  // }

  // updateProfile(id, profile) {
  //   console.log('service file');
  //   return this.http.put(environment.apiBaseUrl + '/profile/' + id, profile, this.noAuthHeader);
  // }

  // deleteProfile(id) {
  //   console.log('client service file: ' + id);

  //   return this.http.delete(environment.apiBaseUrl + '/profile/' + id, this.noAuthHeader);
  // }
}
