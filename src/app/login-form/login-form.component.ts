import { LoginService } from './../ng-services/login.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNull } from 'util';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginService]
})
export class LoginFormComponent implements OnInit {
  userName= '';
  password= '';
  isValid= true;
  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onChange() {
    if (this.loginForm.get('username').touched && (this.loginForm.get('username').invalid)) {
      this.isValid = true;
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.isValid = false;
    } else {
      console.log (this.loginForm);
      this.loginService.setLoginStatus(true);
      this.loginService.setUserName(this.userName);
      this.router.navigate(['/jobCreate']);
    }
  }
}
