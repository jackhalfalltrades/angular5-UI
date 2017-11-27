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

  // userName = '';
  // requestType = '';
  // ticketNumber = '';
  // cerNo = '';
  // spid = '';
  // impactedCi = '';


  // multiSelectEnabler: IMultiSelectSettings;
  // singleSelectEnabler: IMultiSelectSettings;

  // requestTypeOptions: IMultiSelectOption[];
  // applicationOptions: IMultiSelectOption[];
  // environemntOptions: IMultiSelectOption[];
  // typeOptions: IMultiSelectOption[];
  // technologyOptions: IMultiSelectOption[];
  // modeOptions: IMultiSelectOption[];
  // domainOptions: IMultiSelectOption[];
  // clusterOptions: IMultiSelectOption[];
  // vmOptions: IMultiSelectOption[];
  // jvmOptions: IMultiSelectOption[];
  // taskOptions: IMultiSelectOption[];
  // artifactOptions: IMultiSelectOption[];
  // artifactPathOptions: IMultiSelectOption[];

  // requestTypeOptionsModel: number[];
  // applicationOptionsModel: number[];
  // environmentOptionsModel: number[];
  // typeOptionsModel: number[];
  // technologyOptionsModel: number[];
  // modeOptionsModel: number[];
  // domainOptionsModel: number[];
  // clusterOptionsModel: number[];
  // vmOptionsModel: number[];
  // jvmOptionsModel: number[];
  // taskOptionsModel: number[];
  // artifactOptionsModel: number[];
  // artifactPathOptionsModel: number[];

  // // Settings configuration
  // mySettings: IMultiSelectSettings = {
  //   enableSearch: true,
  //   showCheckAll: true,
  //   showUncheckAll: true,
  //   isLazyLoad: true,
  //   checkedStyle: 'fontawesome',
  //   buttonClasses: 'btn btn-default',
  //   dynamicTitleMaxItems: 0,
  //   closeOnClickOutside: true,
  //   displayAllSelectedText: false,
  //   containerClasses: 'dropdown-block'
  // };

  // dropDownSettings: IMultiSelectSettings = {
  //   enableSearch: false,
  //   showCheckAll: false,
  //   showUncheckAll: false,
  //   isLazyLoad: true,
  //   checkedStyle: 'fontawesome',
  //   buttonClasses: 'btn btn-default',
  //   dynamicTitleMaxItems: 1,
  //   closeOnClickOutside: true,
  //   displayAllSelectedText: false,
  //   containerClasses: 'dropdown-block',
  //   selectionLimit: 1
  // };

  // // Text configuration
  // myTexts: IMultiSelectTexts = {
  //   checkAll: 'Select All',
  //   uncheckAll: 'Deselect All',
  //   checked: 'Option Selected',
  //   checkedPlural: 'Options Selected',
  //   searchPlaceholder: 'Search...',
  //   searchEmptyResult: 'Nothing found...',
  //   searchNoRenderText: 'Type in search box to see results...',
  //   defaultTitle: 'Select Options',
  //   // allSelected: 'All selected'
  // };

  // constructor(private authService: AuthService, private router: Router, private jobCreateService: JobCreateService) { }
  constructor(private router: Router, private jobCreateService: JobCreateService) { }

  ngOnInit() {
    this.jobCreateModel = this.jobCreateService.getJobCreateModelInit();
    this.jobRenderer = new FormGroup ({
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
    // this.jobCreatModel.setUserName(this.authService.loginForm.getUserName());
    // this.jobCreatModel.setRequestTypeOptions([
    //   {id: 1, name: 'Incident'},
    //   {id: 2, name: 'Change'}
    // ]);
    // this.jobCreateModelapplicationOptions = [
    //   { id: 1, name: 'Order Management System' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.environemntOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.artifactOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.artifactPathOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.clusterOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.jvmOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.domainOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.modeOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.taskOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.technologyOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.typeOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    // this.vmOptions = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' }
    // ];
    console.log(this.jobRenderer);
  }

  onChange(event: any) {
    console.log(this.jobCreateModel.getRequestTypeOptions());
  }
  ngOnChanges() {
  }

  onSubmit() {
    console.log(this.jobRenderer);
  }

  resetForm() {
    console.log('form is reset');
  }

}
