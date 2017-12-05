import { EventEmitter } from '@angular/core';

export class LoginForm {
    loggedIn =  false;
    firstName = '';
    lastName = '';
    userId = '';
    displayName = 'Signin';
    employeeStatus = '';
    employeeRole = '';
    isAunthencated =  false;
    constructor() {}

    setLoggedIn(loggedIn: boolean) {
        this.loggedIn = loggedIn;
    }

    getLoggedIn(): boolean {
        return this.loggedIn;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getFirstName(): string {
        return this.firstName;
    }


    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setUserId(userId: string) {
        this.userId = userId;
    }

    getUserId(): string {
        return this.userId;
    }

    setDisplayName(displayName: string) {
        this.displayName = displayName;
    }

    getDisplayName(): string {
        return this.displayName;
    }

    setEmployeeStatus(employeeStatus: string) {
        this.employeeStatus = employeeStatus;
    }

    getEmployeeStatus(): string {
        return this.employeeStatus;
    }

    setEmployeeRole(employeeRole: string) {
        this.employeeRole = employeeRole;
    }

    getEmployeeRole(): string {
        return this.employeeRole;
    }

    setisAunthencated(isAunthencated: boolean) {
        this.isAunthencated = isAunthencated;
    }

    getisAunthencated(): boolean {
        return this.isAunthencated;
    }
}
