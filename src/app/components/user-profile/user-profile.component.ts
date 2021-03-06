import { Component, OnInit } from '@angular/core';
import {ContextService} from '../../services/context.service';
import { DomSanitizer } from '@angular/platform-browser';
import {DataService} from '../../services/data.service';

import {User} from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private firstName;
  private lastName;
  private password;
  private validatePassword;
  private email;


  constructor(private sanitizer:DomSanitizer,
    private data: DataService,
    private context: ContextService,
    private router: Router) { }

  ngOnInit() {
    this.initializeUser();
    console.log(this.context.getUser());
  }

  currentUser: User;
  numOfEvents: Number;

  initializeUser(){
    this.currentUser = this.context.getUser();
    console.log(this.currentUser);
  }

  updateUser(){
    console.log(this.currentUser);
    console.log(this.firstName, this.lastName, this.email, this.password, this.validatePassword);
    
    if(this.firstName != undefined)
      this.currentUser.firstName = this.firstName;
    if(this.lastName != undefined)
      this.currentUser.lastName = this.lastName;
    if(this.email != undefined)
      this.currentUser.email = this.email;
    if(this.password != undefined && this.password === this.validatePassword)
      this.currentUser.password = this.password;
    this.context.setUser(this.currentUser);
    console.log("CURRENT USER TO BE UPDATED: ", this.currentUser);
    this.data.updateUser(this.currentUser).subscribe();
  }
}
