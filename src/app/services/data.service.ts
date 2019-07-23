import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { properties } from '../app.properties';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = properties.url;

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url.concat('user/view/all'));
  }

  getUserByUsername(username: String): Observable<User> {
    const user = {
      username: username
    };
    return this.http.post<User>(this.url.concat(''), user);
  }


  updateUser(user: User){
    return this.http.post<User>(this.url.concat('users/update'), user);
  }


}