import { EventEmitter } from '@angular/core';

export class LoginForm {
    loggedIn =  false;
    userName = 'Signin';
    isAunthencated =  false;
    constructor() {}

    // constructor(loggedIn: boolean, userName: string, isAuthenticated: boolean) {
    //     this.loggedIn = loggedIn;
    //     this.userName = userName;
    //     this.isAunthencated = isAuthenticated;
    // }

    setLoggedIn(loggedIn: boolean) {
        this.loggedIn = loggedIn;
    }

    getLoggedIn(): boolean {
        return this.loggedIn;
    }

    setUserName(UserName: string) {
        this.userName = UserName;
    }

    getUserName(): string {
        return this.userName;
    }

    setisAunthencated(isAunthencated: boolean) {
        this.isAunthencated = isAunthencated;
    }

    getisAunthencated(): boolean {
        return this.isAunthencated;
    }
}
