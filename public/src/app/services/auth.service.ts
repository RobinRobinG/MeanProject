import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  registerUser(user) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`/users/register`, user, {headers});
  }
  authenticateUser(user) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`/users/authenticate`, user, {headers});
  }

  getProfile() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.authToken});
    this.loadToken();
    return this.http.get(`/users/profile`, {headers});
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(localStorage.id_token);
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
