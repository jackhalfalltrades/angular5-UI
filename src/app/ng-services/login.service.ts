export class LoginService {
    isLogin: Boolean = false;
    userName: String = 'Sign In';
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

}
