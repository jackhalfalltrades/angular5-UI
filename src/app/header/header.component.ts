import { LoginService } from './../ng-services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  welcomeText: String = '';
  isLoggedIn: Boolean = true;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.welcomeText = 'Welcome, ' + this.loginService.getUserName();
    this.isLoggedIn = this.loginService.getLoginStatus();
  }

}
