import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthDAO {

    constructor (private http: Http) {}

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
                const header = res.headers.get('ut');
                const response = res.json();
                return response;
            }
        );
    }

}
