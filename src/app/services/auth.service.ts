import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { properties } from '../app.properties';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

  private url = properties.url;
  constructor(private http: HttpClient) { }

  login(username: String, password: String): Observable<User> {
    const user = {
      userName: username,
      password: password
    };
    console.log(`Logging in ${username} with password: ${password}`);
    console.log(JSON.stringify(user));
    console.log(this.url);
    return this.http.post<User>(this.url.concat('login'), user);
  }

  createAccount(username: String, password: String, firstname: String, lastname: String, email: String) {
    const user = {
      userName: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
      email: email
    };
    return this.http.post<User>(this.url.concat(''), user);
  }
  forget(email: String) {
    const user = {
      email: email
    };
    return this.http.post<User>(this.url.concat('forget'), user);
  }

  validate(username: String, password: String): Boolean {
    return null;
  }


}
