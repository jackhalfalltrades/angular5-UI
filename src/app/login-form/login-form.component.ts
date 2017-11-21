import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userName= '';
  password= '';

  constructor() { }

  ngOnInit() {
  }

  onLogin(userName: HTMLInputElement, password: HTMLInputElement) {
    this.userName = userName.value;
    this.password = password.value;
  }

}
