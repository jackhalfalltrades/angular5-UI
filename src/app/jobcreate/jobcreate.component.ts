
import { Component, OnInit, OnChanges } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings, MultiselectDropdown } from 'angular-2-dropdown-multiselect';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.css']
})
export class JobcreateComponent implements OnInit, OnChanges {
  userId = '';
  applicationOptions: IMultiSelectOption[];
  environemntOptions: IMultiSelectOption[];
  typeOptions: IMultiSelectOption[];
  technologyOptions: IMultiSelectOption[];
  modeOptions: IMultiSelectOption[];
  domainOptions: IMultiSelectOption[];
  clusterOptions: IMultiSelectOption[];
  vmOptions: IMultiSelectOption[];
  jvmOptions: IMultiSelectOption[];
  taskOptions: IMultiSelectOption[];
  artifactOptions: IMultiSelectOption[];
  artifactPathOptions: IMultiSelectOption[];

  applicationOptionsModel: number[];
  environemntOptionsModel: number[];
  typeOptionsModel: number[];
  technologyOptionsModel: number[];
  modeOptionsModel: number[];
  domainOptionsModel: number[];
  clusterOptionsModel: number[];
  vmOptionsModel: number[];
  jvmOptionsModel: number[];
  taskOptionsModel: number[];
  artifactOptionsModel: number[];
  artifactPathOptionsModel: number[];

// Settings configuration
mySettings: IMultiSelectSettings = {
    enableSearch: true,
    showCheckAll: true,
    showUncheckAll: true,
    isLazyLoad: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default',
    dynamicTitleMaxItems: 0,
    closeOnClickOutside: true,
    displayAllSelectedText: false,
    containerClasses: 'dropdown-block'
};

// Text configuration
  myTexts: IMultiSelectTexts = {
  checkAll: 'Select All',
  uncheckAll: 'Deselect All',
  checked: 'Option Selected',
  checkedPlural: 'Options Selected',
  searchPlaceholder: 'Search...',
  searchEmptyResult: 'Nothing found...',
  searchNoRenderText: 'Type in search box to see results...',
  defaultTitle: 'Select Options',
// allSelected: 'All selected'
};

 constructor(private authService: AuthService) {}

  ngOnInit() {
    this.applicationOptions = [
      { id: 1, name: 'Order Management System' },
      { id: 2, name: 'Option 2' }
  ];
  this.environemntOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.artifactOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.artifactPathOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.clusterOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.jvmOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.domainOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.modeOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.taskOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.technologyOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.typeOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  this.vmOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];
  }

  onChange(event: any) {
        console.log(this.applicationOptions);
    }
    ngOnChanges() {
      this.userId = this.authService.loginForm.getUserName();
  }

}
