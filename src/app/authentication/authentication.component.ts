import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  
  public signedIn = true;
  public signUpStyle = "";
  public loginStyle = "form-clicked";

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  toLogin(){
    this.signedIn = false;
    this.loginStyle = "";
    this.signUpStyle = "form-clicked";
  }

  toRegister(){
    this.signedIn = true;
    this.loginStyle = "form-clicked";
    this.signUpStyle = ""
  }

}
