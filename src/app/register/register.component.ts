import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  birthDay: string;
  email: string;
  password: string;
  repeatPassword: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  register(){
    var user = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      birthDay: this.birthDay,
      email: this.email,
      password: this.password
    }
    console.log(user);
    this.userService.register(user).subscribe((res:any) => {

    }, (err) => {

    })
  }

}
