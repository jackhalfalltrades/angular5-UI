import { Component, OnInit  } from '@angular/core';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {
  constText = 'Welcome, ';
  isLoggedIn = false;
  welcomeText = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loginStatusUpdated
    .subscribe(
      (loginDetails: { displayName: string, isLoggedIn: boolean}) => {
        this.isLoggedIn = loginDetails.isLoggedIn;
        this.welcomeText = this.constText + loginDetails.displayName;
      }
    );
  }
}
