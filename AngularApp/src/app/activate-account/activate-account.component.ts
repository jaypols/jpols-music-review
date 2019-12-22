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
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css'],
  providers: [SongService, UserService]
})
export class ActivateAccountComponent implements OnInit {

  constructor(private songService: SongService, private userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  LogIn()
  {
    console.log(this.userService.activateUserData);
    this.userService.activate(this.userService.activateUserData).subscribe(
      (res: any) => document.getElementById('result5').innerText = "Success. Account is now Activated",
      err => document.getElementById('result5').innerText = err.error
    )
  }

}
