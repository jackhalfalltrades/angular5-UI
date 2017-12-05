import { EventEmitter, Injectable } from '@angular/core';
import { LoginForm } from './signin.model';
import { AuthDAO } from './auth.dao';

@Injectable()
export class AuthService {
    constructor(private authdao: AuthDAO) {}
    loggedIn = false;
    loginForm = new LoginForm();
    userName = '';
    data: string;
    loginStatusUpdated = new EventEmitter<{ displayName: string, isLoggedIn: boolean }>();

    login(userName: string, password: string): LoginForm {
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
            },
            (error) => console.log(error)
        );
        return this.loginForm;
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
