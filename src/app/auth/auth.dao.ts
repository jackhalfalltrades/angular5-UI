import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthDAO {

    constructor (private http: Http, private cookieServcie: CookieService) {}

    login(data: any) {
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          };
        const requestOptions = {
            headers: new Headers(headerDict),
        };
        return this.http.post('https://localhost:10143/login', data, requestOptions)
        .map(
            (res: Response) => {
                this.cookieServcie.set('ut', res.headers.get('x-auth-token'),
                new Date().getMilliseconds() + 7200000);
                const response = res.json();
                return response;
            }
        );
    }

}
