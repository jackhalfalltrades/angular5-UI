import { JobCreateDao } from './jobCreate.dao';
import { JobCreateModel } from './jobCreate.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings, MultiselectDropdown } from 'angular-2-dropdown-multiselect';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { JobCreateService } from './jobcreate.service';
import { Validator } from './jobcreate.validator';
import { DISABLED, VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.css'],
  providers: [JobCreateService, JobCreateDao, Validator]
})
export class JobcreateComponent implements OnInit {
  jobRenderer: FormGroup;
  jobCreateModel: JobCreateModel;
  multiSelectOptionModel: IMultiSelectOption[];
  formValidation = {s: '', isValid: true, isrequestType: false, isTicketNumber: false};
  isFormEnabled = false;
  // : { s: string, isValid: boolean, isrequestType: boolean, isTicketNumber: boolean }

  constructor(private router: Router, private jobCreateService: JobCreateService, private validator: Validator) { }

  ngOnInit() {

    this.jobCreateModel = this.jobCreateService.jobCreateRenderer();

    this.jobRenderer = new FormGroup({
      'userName': new FormControl(this.jobCreateModel.getUserName()),
      'requestTypeOptionsModel': new FormControl(this.jobCreateModel.getRequestTypeOptionsModel(), Validators.required),
      'ticketNumber': new FormControl(null, [Validators.required, Validators.minLength(10),
                                             Validators.maxLength(10)]),
      'cerNo': new FormControl(null),
      'spid': new FormControl(null),
      'impactedCi': new FormControl(null),
      'applicationOptionsModel': new FormControl({value: null, disabled: true }, Validators.required),
      'environmentOptionsModel': new FormControl(null, Validators.required),
      'typeOptionsModel': new FormControl(null, Validators.required),
      /* 'technologyOptionsModel': new FormControl(null, Validators.required),
      'modeOptionsModel': new FormControl(null, Validators.required), */
      'domainOptionsModel': new FormControl(null, Validators.required),
      'clusterOptionsModel': new FormControl(null, Validators.required),
      'vmOptionsModel': new FormControl(null, Validators.required),
      'jvmOptionsModel': new FormControl(null, Validators.required),
      'taskOptionsModel': new FormControl(null, Validators.required),
      'artifactOptionsModel': new FormControl(null, Validators.required),
      'artifactPathOptionsModel': new FormControl(null, Validators.required)
    });

    this.formValidation = this.validator.validateForm(this.jobRenderer, this.jobCreateModel);

    this.jobRenderer.controls['requestTypeOptionsModel'].valueChanges
      .subscribe(
      (selectedOptions: any[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedRequestTypeOptions(selectedOptions);
        } else {
          this.jobCreateModel.setSelectedRequestTypeOptions([]);
        }
        this.formValidation = this.validator.validateForm(this.jobRenderer, this.jobCreateModel);
      }
      );
    this.jobRenderer.controls['ticketNumber'].valueChanges
      .subscribe(
      (value: any[]) => {
        this.jobCreateModel.setTicketNumber(value.toString());
        this.formValidation = this.validator.validateForm(this.jobRenderer, this.jobCreateModel);
      }
      );

    this.jobRenderer.controls['applicationOptionsModel'].valueChanges
      .subscribe((selectedOptions: any[]) => {
        if (selectedOptions[0]) {
          // populate env drop down based on selected application
          this.jobCreateModel.setSelectedApplicationOptions(selectedOptions);
          this.jobCreateService.cascadeDropdowns('applicationOptionsModel', 'environment');
        } else {
          // clear the selected application options
          this.jobCreateModel.setSelectedApplicationOptions([]);
          // clear population of environment
          this.jobCreateModel.setEnvironmentOptions([]);
          // cleasr selection of  environment
          this.jobRenderer.controls['environmentOptionsModel'].setValue([], { emitEvent: true });
        }
      });

    this.jobRenderer.controls['environmentOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          // populate type dropdown based on selected application and env
          this.jobCreateModel.setSelectedEnvironmentOptions(selectedOptions);
          this.jobCreateService.cascadeDropdowns('environmentOptionsModel', 'type');
        } else {
          // clear the selected environment options
          this.jobCreateModel.setSelectedEnvironmentOptions([]);
          // clear population of type dropdown
          this.jobCreateModel.setTypeOptions([]);
          // clear selection of type dropdown
          this.jobRenderer.controls['typeOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['typeOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedTypeOptions(selectedOptions);
          // populate tech dropdown based on app, env, type
          this.jobCreateService.cascadeDropdowns('typeOptionsModel', 'domain');
        } else {
          // clear the selected type options
          this.jobCreateModel.setSelectedTypeOptions([]);
          /* // clear population of tech dropdown
          this.jobCreateModel.setTechnologyOptions([]);
          // clear selection of tech dropdown
          this.jobRenderer.controls['technologyOptionsModel']
            .setValue([], { emitEvent: true }); */
          // clear population of domain dropdown
          this.jobCreateModel.setDomainOptions([]);
          // clear selection of domain dropdown
          this.jobRenderer.controls['domainOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    /* this.jobRenderer.controls['technologyOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        // populate mode dropdown based on app,env,type,tech
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedTechnologyOptions(selectedOptions);
          this.jobCreateService.cascadeDropdowns('technologyOptionsModel', 'mode');
        } else {
          // clear the selected technology options
          this.jobCreateModel.setSelectedTechnologyOptions([]);
          // clear population of mode dropdown
          this.jobCreateModel.setModeOptions([]);
          // clear selection of mode dropdown
          this.jobRenderer.controls['modeOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['modeOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        // populate domain options based on app, env, type, tech, mode
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedModeOptions(selectedOptions);
          this.jobCreateService.cascadeDropdowns('modeOptionsModel', 'domain');
        } else {
          // clear the selected mode options
          this.jobCreateModel.setSelectedModeOptions([]);
          // clear population of domain dropdown
          this.jobCreateModel.setDomainOptions([]);
          // clear selection of domain dropdown
          this.jobRenderer.controls['domainOptionsModel']
            .setValue([], { emitEvent: true });
        }
      }); */
    this.jobRenderer.controls['domainOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedDomainOptions(selectedOptions);
          // populate cluster dropdown based on app, env, type, tech, mode, domain
          this.jobCreateService.cascadeDropdowns('domainOptionsModel', 'cluster');
        } else {
          // clear the selected domain options
          this.jobCreateModel.setSelectedDomainOptions([]);
          // clear population of cluster dropdown
          this.jobCreateModel.setClusterOptions([]);
          // clear select of cluster dropdown
          this.jobRenderer.controls['clusterOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['clusterOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedClusterOptions(selectedOptions);
          // populate vm dropdown based on app, env, type, tech, mode, domain, cluster
          this.jobCreateService.cascadeDropdowns('clusterOptionsModel', 'host');
        } else {
          // clear the selected cluster options
          this.jobCreateModel.setSelectedClusterOptions([]);
          // clear population of vm dropdown
          this.jobCreateModel.setVmOptions([]);
          // clear select of vm dropdown
          this.jobRenderer.controls['vmOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['vmOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedVmOptions(selectedOptions);
          // populate jvm dropdown based on app, env, type, tech, mode, domain, cluster, vm
          this.jobCreateService.cascadeDropdowns('vmOptionsModel', 'instance');
        } else {
          // clear the selected VM options
          this.jobCreateModel.setSelectedVmOptions([]);
          // clear population jvm dropdown
          this.jobCreateModel.setJvmOptions([]);
          // clear selection of jvm dropdown
          this.jobRenderer.controls['jvmOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['jvmOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedJvmOptions(selectedOptions);
          // populate task dropdown based on app, env, type, tech, mode, domain, cluster, vm, jvm
          this.jobCreateService.cascadeDropdowns('jvmOptionsModel', 'action');
        } else {
          // clear the selected JVM options
          this.jobCreateModel.setSelectedJvmOptions([]);
          // clear population of task dropdown
          this.jobCreateModel.setTaskOptions([]);
          // clear selection of task dropdown
          this.jobRenderer.controls['taskOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['taskOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedTaskOptions(selectedOptions);
          // populate artifact dropdown based on app, env, type, tech, mode, domain, cluster, vm, jvm, task
          this.jobCreateService.cascadeDropdowns('taskOptionsModel', 'artifact');
        } else {
          // clear the selected task options
          this.jobCreateModel.setSelectedTaskOptions([]);
          // clear population of artifact dropdown
          this.jobCreateModel.setArtifactOptions([]);
          // clear selection of artifact dropdown
          this.jobRenderer.controls['artifactOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['artifactOptionsModel'].valueChanges
      .subscribe((selectedOptions: String[]) => {
        if (selectedOptions[0]) {
          this.jobCreateModel.setSelectedArtifactOptions(selectedOptions);
          // populate artifact path dropdown based on app, env, type, tech, mode, domain, cluster, vm, jvm, task, artifiact
          this.jobCreateService.cascadeDropdowns('artifactOptionsModel', 'artifactPath');
        } else {
          // clear the selecte artifact options
          this.jobCreateModel.setSelectedArtifactOptions([]);
          // clear population of artifact path dropdown
          this.jobCreateModel.setArtifactPathOptions([]);
          // clear selection of artifact path dropdown
          this.jobRenderer.controls['artifactPathOptionsModel']
            .setValue([], { emitevent: true });
        }
      });

      // enalbing the form submit option ony of form is valid
      this.jobRenderer.statusChanges
      .subscribe(
        (observer: any) => {
          // console.log(observer);
          observer.toString() === 'VALID' ? this.isFormEnabled = true : this.isFormEnabled = false;
          // console.log('form status:' + this.jobRenderer.status + ', isFormEnabled: ' + this.isFormEnabled );
        }
      );
  }

  onSubmit() {
    this.jobCreateService.generateJob(this.jobRenderer, this.jobCreateModel);
  }

  onReset() {
    this.jobRenderer.reset();
  }

}


