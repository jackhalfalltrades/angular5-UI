import { JobCreateModel } from './jobCreate.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings, MultiselectDropdown } from 'angular-2-dropdown-multiselect';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { JobCreateService } from './jobcreate.service';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.css'],
  providers: [JobCreateService]
})
export class JobcreateComponent implements OnInit, OnChanges {
  jobRenderer: FormGroup;
  jobCreateModel: JobCreateModel;
  multiSelectOptionModel: IMultiSelectOption[];
  requestType: string;
  envSelected: boolean;

  constructor(private router: Router, private jobCreateService: JobCreateService) { }

  ngOnInit() {
    this.jobCreateModel = this.jobCreateService.getJobCreateModelInit();
    this.jobRenderer = new FormGroup({
      'userName': new FormControl(this.jobCreateModel.getUserName()),
      'requestTypeOptionsModel': new FormControl(this.jobCreateModel.getRequestTypeOptionsModel()),
      'ticketNumber': new FormControl(null),
      'cerNo': new FormControl(null),
      'spid': new FormControl(null),
      'impactedCi': new FormControl(null),
      'applicationOptionsModel': new FormControl(null),
      'environmentOptionsModel': new FormControl(null),
      'typeOptionsModel': new FormControl(null),
      'technologyOptionsModel': new FormControl(null),
      'modeOptionsModel': new FormControl(null),
      'domainOptionsModel': new FormControl(null),
      'clusterOptionsModel': new FormControl(null),
      'vmOptionsModel': new FormControl(null),
      'jvmOptionsModel': new FormControl(null),
      'taskOptionsModel': new FormControl(null),
      'artifactOptionsModel': new FormControl(null),
      'artifactPathOptionsModel': new FormControl(null)
    });

    this.jobRenderer.controls['applicationOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          // populate env drop down based on selected application
          this.jobCreateService.cascadeDropdowns('applicationOptionsModel', selectedOptions);
        } else {
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
          this.jobCreateService.cascadeDropdowns('environmentOptionsModel', selectedOptions);
        } else {
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
          // populate tech dropdown based on app, env, type
          this.jobCreateService.cascadeDropdowns('typeOptionsModel', selectedOptions);
        } else {
          // clear population of tech dropdown
          this.jobCreateModel.setTechnologyOptions([]);
          // clear selection of tech dropdown
          this.jobRenderer.controls['technologyOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['technologyOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        // populate mode dropdown based on app,env,type,tech
        if (selectedOptions[0]) {
          this.jobCreateService.cascadeDropdowns('technologyOptionsModel', selectedOptions);
        } else {
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
          this.jobCreateService.cascadeDropdowns('modeOptionsModel', selectedOptions);
        } else {
          // clear population of domain dropdown
          this.jobCreateModel.setDomainOptions([]);
          // clear selection of domain dropdown
          this.jobRenderer.controls['domainOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['domainOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          // populate cluster dropdown based on app, env, type, tech, mode, domain
          this.jobCreateService.cascadeDropdowns('domainOptionsModel', selectedOptions);
        } else {
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
          // populate vm dropdown based on app, env, type, tech, mode, domain, cluster
          this.jobCreateService.cascadeDropdowns('clusterOptionsModel', selectedOptions);
        } else {
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
          // populate jvm dropdown based on app, env, type, tech, mode, domain, cluster, vm
          this.jobCreateService.cascadeDropdowns('vmOptionsModel', selectedOptions);
        } else {
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
          // populate task dropdown based on app, env, type, tech, mode, domain, cluster, vm, jvm
          this.jobCreateService.cascadeDropdowns('jvmOptionsModel', selectedOptions);
        } else {
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
          // populate artifact dropdown based on app, env, type, tech, mode, domain, cluster, vm, jvm, task
         this.jobCreateService.cascadeDropdowns('taskOptionsModel', selectedOptions);
        } else {
          // clear population of artifact dropdown
          this.jobCreateModel.setArtifactOptions([]);
          // clear selection of artifact dropdown
          this.jobRenderer.controls['artifactOptionsModel']
            .setValue([], { emitEvent: true });
        }
      });
    this.jobRenderer.controls['artifactOptionsModel'].valueChanges
      .subscribe((selectedOptions: number[]) => {
        if (selectedOptions[0]) {
          // populate artifact path dropdown based on app, env, type, tech, mode, domain, cluster, vm, jvm, task, artifiact
          this.jobCreateService.cascadeDropdowns('artifactOptionsModel', selectedOptions);
        } else {
          // clear population of artifact path dropdown
          this.jobCreateModel.setArtifactPathOptions([]);
          // clear selection of artifact path dropdown
          this.jobRenderer.controls['artifactPathOptionsModel']
            .setValue([], { emitevent: true });
        }
      });

  }

  onChange(event: any) { }

  ngOnChanges() { }

  onSubmit() {
    console.log(this.jobRenderer);
  }

  onReset() {
    this.jobRenderer.reset();
  }

}
