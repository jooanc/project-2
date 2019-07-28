import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ContextService } from '../../services/context.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  private email;

  constructor(
    private authService: AuthService,
    private router: Router,
    private context: ContextService
  ) { }

  ngOnInit() {
  }

  forget() {
    this.authService.forget(this.email).subscribe(
      data => {
        this.router.navigateByUrl('home')
      }
    )
  }

}

