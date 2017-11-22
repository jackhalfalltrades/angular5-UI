import { LoginService } from './../ng-services/login.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {
  welcomeText: String = '';
  isLoggedIn: Boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.login
    .subscribe(
      (login: {userName: String, isLogin: Boolean}) => {
        this.welcomeText = 'Welcome, ' + login.userName.valueOf();
        this.isLoggedIn = login.isLogin.valueOf();
      }
    );
    // this.welcomeText = 'Welcome, ' + this.loginService.getUserName();
    // this.isLoggedIn = this.loginService.getLoginStatus();
  }

}
