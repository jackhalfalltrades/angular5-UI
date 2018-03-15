import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class JobDeployDao {

    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
    requestOptions = {
        headers: new Headers(this.headerDict),
    };

    constructor(private http: Http) { }

    loadNewJob() {
        return this.http.get('http://localhost:11080/jobDetails', this.requestOptions)
            .map(
            (res: Response) => {

                const response = res.json();
                return response;
            }
            );
    }

    buildJob(event: Event) {
        const data = '{ "jobID": "' + event.srcElement.id.toString() + '" }';
        return this.http.post('http://dtl01lnxap01a:10280/buildJob', data, this.requestOptions)
        .map(
            (res: Response) => {
                const response = res.json();
                return response;
            }
        );
    }

}
