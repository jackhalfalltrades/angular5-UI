import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGaurd implements CanActivate {

    constructor(private router: Router, private authService: AuthService, private cookieService: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const token = this.cookieService.get('ut');
        if (token != null) {
            // if (this.authService.isAuthenticated()) {
                return true;
            // }
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
