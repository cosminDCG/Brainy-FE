import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { GlobalService } from '../services/global-service/global.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usernameOrEmail: string;
  password: string;

  constructor(private userService: UserService,
              private router: Router,
              private global: GlobalService) { }

  ngOnInit() {
  }

  login(){
    var user = {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    }

    this.userService.login(user).subscribe((res:any) => {
      this.global.user = res.user.Items[0];
      console.log(this.global.user);
      this.router.navigate(['/dashboard']);
    }, (err) => {

    })
  }

}
