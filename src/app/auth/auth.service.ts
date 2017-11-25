import { EventEmitter } from '@angular/core';
import { LoginForm } from './signin.model';

export class AuthService {
    loggedIn = false;
    loginForm = new LoginForm();
    userName = '';
    loginStatusUpdated = new EventEmitter<{ userName: string, isLoggedIn: boolean }>();

    login(userName: string, password: string): LoginForm {
        // after reaching out to server and on response set the below values
        this.loginForm.setUserName(userName);
        this.loginForm.setLoggedIn(true);
        this.loginForm.setisAunthencated(true);
        this.loggedIn = true;
        return this.loginForm;
    }

    isAuthenticated(): boolean {
        // const promise = new Promise(
        //     (resolve, reject) => {
        //         setTimeout(() => {
        //           resolve(this.loggedIn);
        //         }, 800);
        //     }
        // );
        return this.loggedIn;
    }

    logout(): boolean {
        this.loginForm.setLoggedIn(false);
        this.loginForm.setisAunthencated(false);
        this.loggedIn = false;
        return true;
    }
    emitLoginStatusUpdated(userName: string, isLoggedIn: boolean) {
        this.loginStatusUpdated.emit({ userName: userName, isLoggedIn: isLoggedIn });
    }
}
