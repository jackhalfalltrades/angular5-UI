import { LoginService } from './../ng-services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.css']
})
export class JobcreateComponent implements OnInit {
  loginStatus: Boolean = false;
  userName: String = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginStatus = this.loginService.getLoginStatus();
    this.userName = this.loginService.getUserName();
  }

}
