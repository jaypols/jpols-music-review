import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable, from} from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedItem: User|{}={};
  users: User[];
  registerUserData: User|{}={};
  xxx: User|{}={};
  loggedUserData: User|{}={};
  activateUserData: User|{}={};
  changePolicy: User|{}={};
  switchString: string;
  readonly baseURL = 'http://localhost:8080/api/open/register'

  constructor(private http : HttpClient) { }

  register(User)
  {
    return this.http.post(this.baseURL, User);
  }

  activate(User)
  {
    return this.http.post('http://localhost:8080/api/secure/activate', User);
  }

  upPolicy(User)
  {
    return this.http.post('http://localhost:8080/api/secure/update-policy', User);
  }

  log(User)
  {
    return this.http.post('http://localhost:8080/api/secure', User);
  }

  findUser(User)
  {
    return this.http.post('http://localhost:8080/api/secure/get-user', User);
  }

  findAllUsers()
  {
    return this.http.get('http://localhost:8080/api/secure/get-user');
  }

  updateUserAccess(str: string)
  {
    var base = 'http://localhost:8080/api/secure/get-user/';
    base = base + str;
    return this.http.get(base);
  }

  updateUserActivation(str: string)
  {
    var base = 'http://localhost:8080/api/secure/activation/';
    base = base + str;
    return this.http.get(base);
  }

  authenticate(User)
  {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers.append('auth-token', this.tokenValue);
    // //console.log(this.loggedUserData);
    // //User.headers.append('auth-token', this.tokenValue);
    // console.log(headers)

    const headers = new HttpHeaders({'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Z…zNzV9.dGS7-vAtqzbpslyajAQAVv4JMSMApnOXGxUAT-QBf5I'})

    // let headers = new HttpHeaders({
    //   'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Z…zNzV9.dGS7-vAtqzbpslyajAQAVv4JMSMApnOXGxUAT-QBf5I'
    // });
    // console.log(User);
    // User.HttpHeaders.set(headers);

    // console.log(User);

    return this.http.get('http://localhost:8080/api/secure/song', {headers}) ;
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
}
