import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { LoginForm } from './signin.model';
import { AuthDAO } from './auth.dao';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class AuthService {
    constructor(private authdao: AuthDAO, private router: Router) {}
    loginForm = new LoginForm();
    loggedIn = false;
    userName = '';
    data: string;
    loginStatusUpdated = new EventEmitter<{ displayName: string, isLoggedIn: boolean }>();
    loginFailed = new EventEmitter<{ loginFailed: boolean, loginError: string }>();

    login(userName: string, password: string) {
        // reaching out to server and on response set the below values
        this.data = '{ "userId": "' + userName + '", "password": "' + password + '" }';
        this.authdao.login(this.data)
        .subscribe(
            (response: any) => {
                this.loginForm.setUserId(response.userId);
                this.loginForm.setFirstName(response.firstName);
                this.loginForm.setLastName(response.lastName);
                this.loginForm.setLoggedIn(true);
                this.loginForm.setDisplayName(response.displayName);
                this.loginForm.setEmployeeRole(response.employeeRole);
                this.loginForm.setEmployeeStatus(response.employeeStatus);
                this.loginForm.setisAunthencated(true);
                this.loginForm.setLoginError(false);
                this.router.navigate(['/jobCreate']);
                this.loginStatusUpdated.emit({
                    displayName: this.loginForm.getDisplayName(), isLoggedIn: this.loginForm.getLoggedIn()
                  });
                console.log(response.headers.get('ut'));
            },
            (error: any) => {
                const err = error.json();
                this.loginForm.setErrorMessage('Login failed.');
                this.loginForm.setLoggedIn(false);
                this.loginForm.setisAunthencated(false);
                this.loginForm.setLoginError(true);
                this.loginFailed.emit({
                    loginFailed: this.loginForm.getLoginError(), loginError: this.loginForm.getErrorMessage()
                  });
            }
        );
    }

    isAuthenticated(): boolean {

        return this.loginForm.getisAunthencated();
    }

    logout(): boolean {
        this.loginForm.setLoggedIn(false);
        this.loginForm.setisAunthencated(false);
        this.loggedIn = false;
        return true;
    }
    emitLoginStatusUpdated(displayName: string, isLoggedIn: boolean) {
        this.loginStatusUpdated.emit({ displayName: displayName, isLoggedIn: isLoggedIn });
    }
}
