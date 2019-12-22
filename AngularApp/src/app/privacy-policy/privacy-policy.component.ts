import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
    var data = document.getElementById('changeable').innerHTML

    if(window.localStorage.getItem("save") != null)
      document.getElementById('changeable').innerHTML = window.localStorage.getItem("save");
  }

  change()
  {
    // console.log(document.getElementById('changeable'));
    console.log(this.userService.upPolicy)
    this.userService.upPolicy(this.userService.changePolicy).subscribe(
      (res: any) => {
        console.log(res);
        if(res.admin == true)
        {
          var myData = document.getElementById('changeable').innerHTML;
          window.localStorage.setItem("save", myData);
          var emailValue = <HTMLInputElement>document.getElementById('emailInput');
          var passwordValue = <HTMLInputElement>document.getElementById('passwordInput');
          emailValue.value = "";
          passwordValue.value = "";
          document.getElementById('result6').innerText = "Success";
        }
        else
        {
          var emailValue = <HTMLInputElement>document.getElementById('emailInput');
          var passwordValue = <HTMLInputElement>document.getElementById('passwordInput');
          emailValue.value = "";
          passwordValue.value = "";
          document.getElementById('result6').innerText = "Admin Access required for changes";
        }
      },
      err => document.getElementById('result6').innerText = err.error
    )
  }

}
