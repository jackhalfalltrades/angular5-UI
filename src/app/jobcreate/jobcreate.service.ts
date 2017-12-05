import { BrowserModule } from '@angular/platform-browser';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { JobCreateModel } from './jobCreate.model';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JobCreateService {
    // _tempMultiSelectOptions: IMultiSelectOption[];
    // _tempSelectedDropdown: string;
    jobCreateModel = new JobCreateModel();

    constructor(private authService: AuthService) { }


    getJobCreateModelInit(): JobCreateModel {
        this.jobCreateModel.setUserName(this.authService.loginForm.getUserId());
        const requestTypeOptions: IMultiSelectOption[] = [
            { id: 1, name: 'Incident Request' },
            { id: 2, name: 'Change Request' }
        ];
        this.jobCreateModel.setRequestTypeOptions(requestTypeOptions);
        this.jobCreateModel.setApplicationOptions([
            { id: 1, name: 'RSS' },
            { id: 2, name: 'REIM' },
            { id: 3, name: 'ESP' },
            { id: 4, name: 'STH' },
            { id: 5, name: 'TSH' },
            { id: 6, name: 'IPOS' },
            { id: 7, name: 'POS' },
            { id: 8, name: 'Cognos' },
            { id: 9, name: 'BDP' },
            { id: 10, name: 'FMS' },
            { id: 11, name: 'OMS' },
            { id: 12, name: 'ECM' }
        ]);
        return this.jobCreateModel;
    }
    cascadeDropdowns(selectorName: string, dropdownSelectOptions: number[]) {
        if (selectorName === 'applicationOptionsModel') {
            // Populate Env dropdowns based on application and negate all other and empty them
            this.jobCreateModel.setEnvironmentOptionsModel([]);
            this.jobCreateModel.setEnvironmentOptions([{ id: 1, name: 'Development' }, { id: 2, name: 'Prod-test' }]);

            // this.reloadDropdowns(dropdownName, multiSelectOptionModel);
        }
        if (selectorName === 'environmentOptionsModel') {
            // Populate type dropdowns based on selected application and environments
            this.jobCreateModel.setTypeOptions([]);
            this.jobCreateModel.setTypeOptions([{ id: 1, name: 'Web Server' }, { id: 2, name: 'App Server' }]);
        }
        if (selectorName === 'typeOptionsModel') {
            // Populate technology dropdowns based on selected application and environments and type
            this.jobCreateModel.setTechnologyOptions([]);
            this.jobCreateModel.setTechnologyOptions([{ id: 1, name: 'JBOSS' }, { id: 2, name: 'JWS' }]);
        }
        if (selectorName === 'technologyOptionsModel') {
            // Populate mode dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setModeOptions([]);
            this.jobCreateModel.setModeOptions([{ id: 1, name: 'Standalone' }, { id: 2, name: 'Domain' }]);
        }
        if (selectorName === 'modeOptionsModel') {
            // Populate domain dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setDomainOptions([]);
            this.jobCreateModel.setDomainOptions([{ id: 1, name: 'Not Applicable' }, { id: 2, name: 'Not Applicable' }]);
        }
        if (selectorName === 'domainOptionsModel') {
            // Populate cluster dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setClusterOptions([]);
            this.jobCreateModel.setClusterOptions([{ id: 1, name: 'Not Applicable' }, { id: 2, name: 'Not Applicable' }]);
        }
        if (selectorName === 'clusterOptionsModel') {
            // Populate VM dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setVmOptions([]);
            this.jobCreateModel.setVmOptions(
                [
                    { id: 1, name: 'dtl01rssap02c.na.bestbuy.com' },
                    { id: 2, name: 'dtl01rm1ap02c.na.bestbuy.com' }
                ]);
        }
        if (selectorName === 'vmOptionsModel') {
            // Populate JVM dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setJvmOptions([]);
            this.jobCreateModel.setJvmOptions(
                [
                    { id: 1, name: 'jbstd-rss-D05' },
                    { id: 2, name: 'jbstd-reim-s02' }
                ]);
        }
        if (selectorName === 'jvmOptionsModel') {
            // Populate task dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setTaskOptions([]);
            this.jobCreateModel.setTaskOptions(
                [
                    { id: 1, name: 'Stop JVM' },
                    { id: 2, name: 'Start JVM' },
                    { id: 3, name: 'Deploy Application' }
                ]);
        }
        if (selectorName === 'taskOptionsModel') {
            // Populate artifact Options dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setArtifactOptions([]);
            this.jobCreateModel.setArtifactOptions(
                [
                    { id: 1, name: 'rss.war' },
                    { id: 2, name: 'rssWeb.war' }
                ]);
        }
        if (selectorName === 'artifactOptionsModel') {
            // populate artifact path options
            this.jobCreateModel.setArtifactPathOptions([]);
            this.jobCreateModel.setArtifactPathOptions(
                [
                    { id: 1, name: '/tmp/deploymentfiles/rss/app/' },
                    { id: 2, name: '/tmp/deploymentfiles/rss/web/' }
                ]);
        }
    }
}


