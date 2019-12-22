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
  selector: 'app-open-homepage',
  templateUrl: './open-homepage.component.html',
  styleUrls: ['./open-homepage.component.css'],
  providers: [SongService, UserService]
})
export class OpenHomepage implements OnInit {

  constructor(private songService: SongService, private userService: UserService, private _router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');
  }

  registerUser()
  {
    console.log(this.userService.registerUserData);
    this.userService.register(this.userService.registerUserData).subscribe(
      res => { 
        document.getElementById('result').innerText = "Registration Complete. Click the following link to activate your account.";
        document.getElementById('activate-reg').style.display = "block";
    },
      err => document.getElementById('result').innerText = err.error
    )
    
    this.userService.registerUserData = 
    {
      username: "",
      email: "",
      password: ""
    }

  }

  LogIn()
  {
    //console.log("Asdf")
    //console.log(this.userService.xxx);

    this.userService.log(this.userService.loggedUserData).subscribe(
      (res:any) => { console.log(res.token)
      localStorage.setItem('token',res.token);
      document.getElementById('result2').innerText = ""
      this.userService.findUser(this.userService.loggedUserData).subscribe(
        (res:any) => {
        console.log(res.admin);
        if(res.activate == false)
        {
          console.log("hi");
          document.getElementById('result2').innerText = "Error: Account is deactivated. Email admin@uwo.ca to resolve the issue.";
        }
        else
        {
          if(res.admin == false)
          {
            this._router.navigate(['/api/secure']);
          }
          if(res.admin == true)
          {
            this._router.navigate(['/api/admin']);
          }
        }
        },
        err => console.log(err.error)
      )
      },
      err => document.getElementById('result2').innerText = err.error
    )
    

  }

  activateAccount()
  {
    console.log("hi")
  }

}
