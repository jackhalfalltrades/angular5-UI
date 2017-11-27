import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings, MultiselectDropdown } from 'angular-2-dropdown-multiselect';

export class JobCreateModel {
  userName= '';
  ticketNumber= '';
  cerNo= '';
  spid= '';
  impactedCi= '';

  // Dropdown Options displayed on screen
  requestTypeOptions: IMultiSelectOption[];
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

  // Dropdown Options selected from displayed (only the ID will be available)
  requestTypeOptionsModel: number[];
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

  // multiselect drop down behavioural settings
  multiSelectEnabler: IMultiSelectSettings = {
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

  // drop down behavioural settings
  singleSelectEnabler: IMultiSelectSettings = {
    enableSearch: true,
    showCheckAll: false,
    showUncheckAll: false,
    isLazyLoad: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default',
    dynamicTitleMaxItems: 1,
    autoUnselect: true,
    closeOnClickOutside: true,
    displayAllSelectedText: false,
    containerClasses: 'dropdown-block',
    selectionLimit: 1
  };

  // dropdown text styles / attributes
  selectTextRenderer: IMultiSelectTexts = {
    checkAll: 'Select All',
    uncheckAll: 'Deselect All',
    checked: 'Option Selected',
    checkedPlural: 'Options Selected',
    searchPlaceholder: 'Search...',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select Options',
  };

  constructor() {}


  setUserName( userName: string ) {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  setTicketNumber( ticketNumber: string) {
    this.ticketNumber = ticketNumber;
  }

  getTicketNumber(): string {
    return this.ticketNumber;
  }

  setCerNo( cerNo: string ) {
    this.cerNo = cerNo;
  }

  getCerNo(): string {
    return this.cerNo;
  }

  setSpid( spid: string ) {
    this.spid = spid;
  }

  getSpid(): string {
    return this.spid;
  }

  setImpactedCi( impactedCi: string ) {
    this.impactedCi = impactedCi;
  }

  getImpactedCi(): string {
    return this.impactedCi;
  }

  getMultiSelectEnabler(): IMultiSelectSettings {
    return this.multiSelectEnabler;
  }

  getSingleSelectEnabler(): IMultiSelectSettings {
    return this.singleSelectEnabler;
  }

  getSelectTextRenderer(): IMultiSelectTexts {
    return this.selectTextRenderer;
  }

  setRequestTypeOptions( requestTypeOptions: IMultiSelectOption[] ) {
    this.requestTypeOptions = requestTypeOptions;
  }

  getRequestTypeOptions(): IMultiSelectOption[] {
    return this.requestTypeOptions;
  }

  setApplicationOptions( applicationOptions: IMultiSelectOption[] ) {
    this.applicationOptions = applicationOptions;
  }

  getApplicationOptions(): IMultiSelectOption[] {
    return this.applicationOptions;
  }

  setEnvironemntOptions( environemntOptions: IMultiSelectOption[] ) {
    this.environemntOptions = environemntOptions;
  }

  getEnvironemntOptions(): IMultiSelectOption[] {
    return this.environemntOptions;
  }

  setVmOptions( vmOptions: IMultiSelectOption[] ) {
    this.vmOptions  = vmOptions ;
  }

  getVmOptions(): IMultiSelectOption[] {
    return this.vmOptions;
  }

  setJvmOptions( jvmOptions: IMultiSelectOption[] ) {
    this.jvmOptions = jvmOptions;
  }

  getJvmOptions(): IMultiSelectOption[] {
    return this.jvmOptions;
  }

  setTaskOptions( taskOptions: IMultiSelectOption[] ) {
    this.taskOptions = taskOptions;
  }

  getTaskOptions(): IMultiSelectOption[] {
    return this.taskOptions;
  }

  setArtifactOptions( artifactOptions: IMultiSelectOption[] ) {
    this.artifactOptions = artifactOptions;
  }

  getArtifactOptions(): IMultiSelectOption[] {
    return this.artifactOptions;
  }

  setArtifactPathOptions( artifactPathOptions: IMultiSelectOption[] ) {
    this.artifactPathOptions = artifactPathOptions;
  }

  getArtifactPathOptions(): IMultiSelectOption[] {
    return this.artifactPathOptions;
  }

  setTypeOptions( typeOptions: IMultiSelectOption[] ) {
    this.typeOptions = typeOptions;
  }

  getTypeOptions(): IMultiSelectOption[] {
    return this.typeOptions;
  }

  setTechnologyOptions( technologyOptions: IMultiSelectOption[] ) {
    this.technologyOptions = technologyOptions;
  }

  getTechnologyOptions(): IMultiSelectOption[] {
    return this.technologyOptions;
  }

  setModeOptions( modeOptions: IMultiSelectOption[] ) {
    this.modeOptions = modeOptions;
  }

  getModeOptions(): IMultiSelectOption[] {
    return this.modeOptions;
  }

  setDomainOptions( domainOptions: IMultiSelectOption[] ) {
    this.domainOptions = domainOptions;
  }

  getDomainOptions(): IMultiSelectOption[] {
    return this.domainOptions;
  }

  setClusterOptions( clusterOptions: IMultiSelectOption[] ) {
    this.clusterOptions = clusterOptions;
  }

  getClusterOptions(): IMultiSelectOption[] {
    return this.clusterOptions;
  }

  setRequestTypeOptionsModel( requestTypeOptionsModel: number[] ) {
    this.requestTypeOptionsModel = requestTypeOptionsModel;
  }

  getRequestTypeOptionsModel(): number[] {
    return this.requestTypeOptionsModel;
  }

  setApplicationOptionsModel( applicationOptionsModel: number[]) {
    this.applicationOptionsModel = applicationOptionsModel;
  }

  getApplicationOptionsModel(): number[] {
    return this.applicationOptionsModel;
  }

  setEnvironemntOptionsModel( environemntOptionsModel: number[] ) {
    this.environemntOptionsModel = environemntOptionsModel;
  }

  getEnvironemntOptionsModel(): number[] {
    return this.environemntOptionsModel;
  }

  setVmOptionsModel( vmOptionsModel: number[] ) {
    this.vmOptionsModel = vmOptionsModel ;
  }

  getVmOptionsModel(): number[] {
    return this.vmOptionsModel;
  }

  setJvmOptionsModel( jvmOptionsModel: number[] ) {
    this.jvmOptionsModel = jvmOptionsModel;
  }

  getJvmOptionsModel(): number[] {
    return this.jvmOptionsModel;
  }

  setTaskOptionsModel( taskOptionsModel: number[] ) {
    this.taskOptionsModel = taskOptionsModel;
  }

  getTaskOptionsModel(): number[] {
    return this.taskOptionsModel;
  }

  setArtifactOptionsModel( artifactOptionsModel: number[] ) {
    this.artifactOptionsModel = artifactOptionsModel;
  }

  getArtifactOptionsModel(): number[] {
    return this.artifactOptionsModel;
  }

  setArtifactPathOptionsModel( artifactPathOptionsModel: number[] ) {
    this.artifactPathOptionsModel = artifactPathOptionsModel;
  }

  getArtifactPathOptionsModel(): number[] {
    return this.artifactPathOptionsModel;
  }

  setTypeOptionsModel( typeOptionsModel: number[] ) {
    this.typeOptionsModel = typeOptionsModel;
  }

  getTypeOptionsModel(): number[] {
    return this.typeOptionsModel;
  }

  setTechnologyOptionsModel( technologyOptionsModel: number[] ) {
    this.technologyOptionsModel = technologyOptionsModel;
  }

  getTechnologyOptionsModel(): number[] {
    return this.technologyOptionsModel;
  }

  setModeOptionsModel( modeOptionsModel: number[] ) {
    this.modeOptionsModel = modeOptionsModel;
  }

  getModeOptionsModel(): number[] {
    return this.modeOptionsModel;
  }

  setDomainOptionsModel( domainOptionsModel: number[] ) {
    this.domainOptionsModel = domainOptionsModel;
  }

  getDomainOptionsModel(): number[] {
    return this.domainOptionsModel;
  }

  setClusterOptionsModel( clusterOptionsModel: number[] ) {
    this.clusterOptionsModel = clusterOptionsModel;
  }

  getClusterOptionsModel(): number[] {
    return this.clusterOptionsModel;
  }

}
