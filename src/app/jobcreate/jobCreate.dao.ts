import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { JobCreateModel } from './jobCreate.model';

@Injectable()
export class JobCreateDao {

    temp: IMultiSelectOption[] = [];
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
    requestOptions = {
        headers: new Headers(this.headerDict),
    };

    constructor(private http: Http) { }

    renderJobCreate(): JobCreateModel {

        const jobCreateModel = new JobCreateModel();
        const requestTypeOptions: IMultiSelectOption[] = [
            { id: 1, name: 'Incident Request' },
            { id: 2, name: 'Change Request' }
        ];
        jobCreateModel.setRequestTypeOptions(requestTypeOptions);
        this.getDropdowns('{"dropdownName": "applications", "responseFilter": {}}')
            .subscribe(
                (response: any) => {
                    this.temp = [];
                    for (const res of response) {
                        this.temp.push({ id: res['appId'], name: res['appName'] });
                    }
                    jobCreateModel.setApplicationOptions(this.temp);
                },
                (error) => console.log(error)
            );
        return jobCreateModel;
    }

    getDropdowns(data: String) {
        // get the dropdown from server
        return this.http.post('https://localhost:20143/load/operations/dropdown', data, this.requestOptions)
            .map(
                (res: Response) => {
                    const response = res.json();
                    return response;
                }
            );
    }

    createJob(data: String) {
        return this.http.post('https://localhost:30143/jobCreate', data, this.requestOptions)
            .map(
                (res: Response) => {
                    const response = res.json();
                    return response;
                }
            );
    }
}
