import { BrowserModule } from '@angular/platform-browser';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { JobCreateModel } from './jobCreate.model';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JobCreateDao } from './jobCreate.dao';
import { error } from 'selenium-webdriver';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class JobCreateService {

    jobCreateModel: JobCreateModel;
    temp: IMultiSelectOption[] = [];
    constructor(private router: Router, private authService: AuthService, private jobCreateDao: JobCreateDao) { }

    jobCreateRenderer(): JobCreateModel {

        this.jobCreateModel = this.jobCreateDao.renderJobCreate();
        this.jobCreateModel.setUserName(this.authService.loginForm.getUserId());
        return this.jobCreateModel;
    }
    cascadeDropdowns(selectorName: string, dropdownName: string) {
        this.temp = [];
        const data = '{ "dropdownName": "' + dropdownName + '", "responseFilter": { "application": ["'
        + this.jobCreateModel.getSelectedApplicationOptions() + '"], "environment": ["'
        + this.jobCreateModel.getSelectedEnvironmentOptions() + '"], "type": ["'
        + this.jobCreateModel.getSelectedTypeOptions() + '"], "domain": ["'
        + this.jobCreateModel.getSelectedDomainOptions().toString().replace(',', '","') + '"], "cluster": ["'
        + this.jobCreateModel.getSelectedClusterOptions().toString().replace(',', '","') + '"], "host": ["'
        + this.jobCreateModel.getSelectedVmOptions().toString().replace(',', '","') + '"], "mapping": ["'
        + this.jobCreateModel.getSelectedJvmOptions().toString().replace(',', '","') + '"], "action": ["'
        + this.jobCreateModel.getSelectedTaskOptions() + '"], "artifact": ["'
        + this.jobCreateModel.getSelectedArtifactOptions().toString().replace(',', '","') + '"], "artifactPath": ["'
        + this.jobCreateModel.getSelectedArtifactPathOptions().toString().replace(',', '","') + '"]}}';

        /* "technology": ["'
        + this.jobCreateModel.getSelectedTechnologyOptions() + '"], "mode": ["'
        + this.jobCreateModel.getSelectedModeOptions() + '"], */

        if (selectorName === 'applicationOptionsModel') {
            // Populate Env dropdowns based on application and negate all other and empty them
            this.jobCreateModel.setEnvironmentOptionsModel([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['envId'], name: res['envName'] });
                    }
                    this.jobCreateModel.setEnvironmentOptions(this.temp);
                }
            );
        }
        if (selectorName === 'environmentOptionsModel') {
            // Populate type dropdowns based on selected application and environments
            this.jobCreateModel.setTypeOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['serverTypeId'], name: res['serverType'] });
                    }
                    this.jobCreateModel.setTypeOptions(this.temp);
                }
            );
        }
       /*  if (selectorName === 'typeOptionsModel') {
            // Populate technology dropdowns based on selected application and environments and type
            this.jobCreateModel.setTechnologyOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    for (let res of response) {
                        this.temp.push({id: res['technologyId'], name: res['technologyName']});
                        console.log(this.temp);
                    }
                    this.jobCreateModel.setTechnologyOptions(this.temp);
                }
            );
            // this.jobCreateModel.setTechnologyOptions([{ id: 1, name: 'JBOSS' }, { id: 2, name: 'JWS' }]);
        }
        if (selectorName === 'technologyOptionsModel') {
            // Populate mode dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setModeOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    for (let res of response) {
                        this.temp.push({id: res['modeId'], name: res['modeDescription']});
                        console.log(this.temp);
                    }
                    this.jobCreateModel.setModeOptions(this.temp);
                }
            );
           // this.jobCreateModel.setModeOptions([{ id: 1, name: 'Standalone' }, { id: 2, name: 'Domain' }]);
        } */
        if (selectorName === /* 'modeOptionsModel' */ 'typeOptionsModel') {
            // Populate domain dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setDomainOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['domainName'], name: res['domainName']});
                    }
                    this.jobCreateModel.setDomainOptions(this.temp);
                }
            );
        }
        if (selectorName === 'domainOptionsModel') {
            // Populate cluster dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setClusterOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['clusterName'], name: res['clusterName']});
                    }
                    this.jobCreateModel.setClusterOptions(this.temp);
                }
            );
        }
        if (selectorName === 'clusterOptionsModel') {
            // Populate VM dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setVmOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['hostId'], name: res['hostName']});
                    }
                    this.jobCreateModel.setVmOptions(this.temp);
                }
            );
        }
        if (selectorName === 'vmOptionsModel') {
            // Populate JVM dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setJvmOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['mappingId'], name: res['instanceName']});
                    }
                    this.jobCreateModel.setJvmOptions(this.temp);
                }
            );
        }
        if (selectorName === 'jvmOptionsModel') {
            // Populate task dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setTaskOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['taskId'], name: res['taskName']});
                    }
                    this.jobCreateModel.setTaskOptions(this.temp);
                }
            );
        }
        if (selectorName === 'taskOptionsModel') {
            // Populate artifact Options dropdowns based on selected application and environments and type and technology
            this.jobCreateModel.setArtifactOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['artifactName'], name: res['artifactName']});
                    }
                    this.jobCreateModel.setArtifactOptions(this.temp);
                }
            );
        }
        if (selectorName === 'artifactOptionsModel') {
            // populate artifact path options
            this.jobCreateModel.setArtifactPathOptions([]);
            this.jobCreateDao.getDropdowns(data)
            .subscribe(
                (response) => {
                    // tslint:disable-next-line:prefer-const
                    for (let res of response) {
                        this.temp.push({id: res['artifactDestinationPath'], name: res['artifactSourcePath']});
                    }
                    this.jobCreateModel.setArtifactPathOptions(this.temp);
                }
            );
        }
    }

    createJob(jobRenderer: any, jobCreateModel: any) {
        const jobCreateForm = jobRenderer.value;
        for (const requestOption of jobCreateModel.getRequestTypeOptions()) {
            if ( requestOption['id'].toString() === jobCreateForm['requestTypeOptionsModel'][0].toString() ) {
                jobCreateForm['requestTypeOptionsModel'] = new Array (requestOption['name']);
            }
        }
        this.jobCreateDao.createJob(JSON.stringify(jobCreateForm))
        .subscribe(
            (response) => {
                this.jobCreateModel.setJobID(response['jobID']);
                alert('Job created successfully with jobID: ' + response['jobID']);
                this.router.navigate(['/jobDeploy']);
            },
            (errors: any) => {
                console.log(errors);
                return 'Error in creating job, please contact administrator';
            }
        );
    }
}

