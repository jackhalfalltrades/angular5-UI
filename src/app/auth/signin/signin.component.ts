import { LoginForm } from './../signin.model';
import { Component, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { LoginForm } from '../signin.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginRenderer: FormGroup;
  formValidated = true;
  loginFailed = false;
  loginError: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.loginRenderer = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
    this.authService.loginStatusUpdated.emit({ displayName: 'Singin' , isLoggedIn: false });
  }

  onChange() {
    if (this.loginRenderer.get('username').touched && (this.loginRenderer.get('username').invalid)) {
      this.formValidated = true;
    }
    if (this.loginRenderer.get('password').touched && (this.loginRenderer.get('password').invalid)) {
      this.formValidated = false;
    }
  }

  onSignin() {
    if (this.loginRenderer.invalid) {
      this.formValidated = false;
    } else {
      this.authService.login(
        this.loginRenderer.get('username').value, this.loginRenderer.get('password').value
      );
      this.authService.loginFailed
      .subscribe(
        (loginErrorDetails: {loginFailed: boolean, loginError: string}) => {
          this.loginFailed = loginErrorDetails.loginFailed;
          this.loginError = loginErrorDetails.loginError;
        }
      );
    }
  }
}
