import { EventEmitter } from '@angular/core';

export class LoginService {
    isLogin: Boolean = false;
    userName: String = 'Sign In';
    login = new EventEmitter<{ userName: String, isLogin: Boolean }>();
    setLoginStatus( isLogin: boolean ) {
        this.isLogin = isLogin;
    }
    getLoginStatus(): Boolean {
        return this.isLogin;
    }
    setUserName( userName: String) {
        this.userName = userName;
    }
    getUserName(): String {
        return this.userName;
    }
    emitLoginEvent() {
        this.login.emit({userName: this.getUserName(), isLogin: this.getLoginStatus()});
    }

}
