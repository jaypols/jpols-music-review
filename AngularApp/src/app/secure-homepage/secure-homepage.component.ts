import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-secure-homepage',
  templateUrl: './secure-homepage.component.html',
  styleUrls: ['./secure-homepage.component.css'],
  providers: [UserService]
})
export class SecureHomepageComponent implements OnInit {

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {

  }

  logout()
  {
    localStorage.removeItem('token');
    this._router.navigate(['/api/open']);
  }

}
