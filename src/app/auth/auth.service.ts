import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from './signin.model';
import { AuthDAO } from './auth.dao';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class AuthService {

    constructor(private authdao: AuthDAO, private router: Router) {}

    userDetails = new UserDetails();

    loginStatusUpdated = new EventEmitter<{ displayName: string, isLoggedIn: boolean }>();
    loginFailed = new EventEmitter<{ loginFailed: boolean, loginError: string }>();

    login(userName: string, password: string) {
        // reaching out to server and on response set the below values
        this.authdao.login('{ "userId": "' + userName + '", "password": "' + password + '" }')
        .subscribe(
            (response: any) => {
                this.userDetails.setUserId(response.userId);
                this.userDetails.setFirstName(response.firstName);
                this.userDetails.setLastName(response.lastName);
                this.userDetails.setLoggedIn(true);
                this.userDetails.setDisplayName(response.displayName);
                this.userDetails.setEmployeeRole(response.employeeRole);
                this.userDetails.setEmployeeStatus(response.employeeStatus);
                this.userDetails.setisAunthencated(true);
                this.userDetails.setLoginError(false);
                this.router.navigate(['jobCreate']);
                this.loginStatusUpdated.emit({
                    displayName: this.userDetails.getDisplayName(), isLoggedIn: this.userDetails.getLoggedIn()
                  });
            },
            (error: any) => {
                const err = error.json();
                this.userDetails.setErrorMessage('Login failed !!!');
                this.userDetails.setLoggedIn(false);
                this.userDetails.setisAunthencated(false);
                this.userDetails.setLoginError(true);
                this.loginFailed.emit({
                    loginFailed: this.userDetails.getLoginError(), loginError: this.userDetails.getErrorMessage()
                });
            }
        );
    }

    isAuthenticated(): boolean {
        return this.userDetails.getisAunthencated();
    }

    logout(): boolean {
        this.userDetails.setLoggedIn(false);
        this.userDetails.setisAunthencated(false);
        return true;
    }
    emitLoginStatusUpdated(displayName: string, isLoggedIn: boolean) {
        this.loginStatusUpdated.emit({ displayName: displayName, isLoggedIn: isLoggedIn });
    }
}
