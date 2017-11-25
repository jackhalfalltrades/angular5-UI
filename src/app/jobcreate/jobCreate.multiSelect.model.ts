import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings, MultiselectDropdown } from 'angular-2-dropdown-multiselect';

export class MultiselectDropdownModel {
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
}
