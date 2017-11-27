import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { JobCreateModel } from './jobCreate.model';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JobCreateService {
    jobCreateModel = new JobCreateModel();

    constructor(private authService: AuthService) {}


    getJobCreateModelInit(): JobCreateModel {
        this.jobCreateModel.setUserName(this.authService.loginForm.getUserName());
        const requestTypeOptions: IMultiSelectOption[] = [
            {id: 1, name: 'Incident'},
            {id: 2, name: 'Change'}
        ];
        this.jobCreateModel.setRequestTypeOptions(requestTypeOptions);
        this.jobCreateModel.setApplicationOptions([
            { id: 1, name: 'RSS' },
            { id: 2, name: 'REIM' }
        ]);
        return this.jobCreateModel;
    }
}
