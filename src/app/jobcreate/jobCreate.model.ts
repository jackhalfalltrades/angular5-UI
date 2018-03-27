import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings, MultiselectDropdown } from 'angular-2-dropdown-multiselect';

export class JobCreateModel {
  userName = '';
  ticketNumber = '';
  cerNo = '';
  spid = '';
  impactedCi = '';
  isValidTicketNumber: boolean;
  jobID = '';

  // Dropdown Options displayed on screen
  requestTypeOptions: IMultiSelectOption[];
  applicationOptions: IMultiSelectOption[];
  environmentOptions: IMultiSelectOption[];
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


  selectedRequestTypeOptions: any[];
  selectedApplicationOptions: any[];
  selectedEnvironmentOptions: any[] = ['default'];
  selectedTypeOptions: any[] = ['default'];
  selectedTechnologyOptions: any[] = ['default'];
  selectedModeOptions: any[] = ['default'];
  selectedDomainOptions: any[] = ['default'];
  selectedClusterOptions: any[] = ['default'];
  selectedVmOptions: any[] = ['default'];
  selectedJvmOptions: any[] = ['default'];
  selectedTaskOptions: any[] = ['default'];
  selectedArtifactOptions: any[] = ['default'];
  selectedArtifactPathOptions: any[] = ['default'];

  // Dropdown Options selected from displayed (only the ID will be available)
  requestTypeOptionsModel: IMultiSelectOption[];
  applicationOptionsModel: IMultiSelectOption[];
  environmentOptionsModel: IMultiSelectOption[];
  typeOptionsModel: IMultiSelectOption[];
  technologyOptionsModel: IMultiSelectOption[];
  modeOptionsModel: IMultiSelectOption[];
  domainOptionsModel: IMultiSelectOption[];
  clusterOptionsModel: IMultiSelectOption[];
  vmOptionsModel: IMultiSelectOption[];
  jvmOptionsModel: IMultiSelectOption[];
  taskOptionsModel: IMultiSelectOption[];
  artifactOptionsModel: IMultiSelectOption[];
  artifactPathOptionsModel: IMultiSelectOption[];

  // multiselect drop down behavioural settings
  multiSelectEnabler: IMultiSelectSettings = {
    enableSearch: true,
    showCheckAll: true,
    showUncheckAll: true,
    isLazyLoad: false,
    checkedStyle: 'glyphicon',
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
    isLazyLoad: false,
    checkedStyle: 'glyphicon',
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

  constructor() { }


  setUserName(userName: string) {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  setTicketNumber(ticketNumber: string) {
    this.ticketNumber = ticketNumber;
  }

  getTicketNumber(): string {
    return this.ticketNumber;
  }

  setCerNo(cerNo: string) {
    this.cerNo = cerNo;
  }

  getCerNo(): string {
    return this.cerNo;
  }

  setSpid(spid: string) {
    this.spid = spid;
  }

  getSpid(): string {
    return this.spid;
  }

  setImpactedCi(impactedCi: string) {
    this.impactedCi = impactedCi;
  }

  getImpactedCi(): string {
    return this.impactedCi;
  }

  setJobID(jobID: string) {
    this.jobID = jobID;
  }

  getJobID(): string {
    return this.jobID;
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

  setRequestTypeOptions(requestTypeOptions: IMultiSelectOption[]) {
    this.requestTypeOptions = requestTypeOptions;
  }

  getRequestTypeOptions(): IMultiSelectOption[] {
    return this.requestTypeOptions;
  }

  setApplicationOptions(applicationOptions: IMultiSelectOption[]) {
    this.applicationOptions = applicationOptions;
  }

  getApplicationOptions(): IMultiSelectOption[] {
    return this.applicationOptions;
  }

  setEnvironmentOptions(environmentOptions: IMultiSelectOption[]) {
    this.environmentOptions = environmentOptions;
  }

  getEnvironmentOptions(): IMultiSelectOption[] {
    return this.environmentOptions;
  }

  setVmOptions(vmOptions: IMultiSelectOption[]) {
    this.vmOptions = vmOptions;
  }

  getVmOptions(): IMultiSelectOption[] {
    return this.vmOptions;
  }

  setJvmOptions(jvmOptions: IMultiSelectOption[]) {
    this.jvmOptions = jvmOptions;
  }

  getJvmOptions(): IMultiSelectOption[] {
    return this.jvmOptions;
  }

  setTaskOptions(taskOptions: IMultiSelectOption[]) {
    this.taskOptions = taskOptions;
  }

  getTaskOptions(): IMultiSelectOption[] {
    return this.taskOptions;
  }

  setArtifactOptions(artifactOptions: IMultiSelectOption[]) {
    this.artifactOptions = artifactOptions;
  }

  getArtifactOptions(): IMultiSelectOption[] {
    return this.artifactOptions;
  }

  setArtifactPathOptions(artifactPathOptions: IMultiSelectOption[]) {
    this.artifactPathOptions = artifactPathOptions;
  }

  getArtifactPathOptions(): IMultiSelectOption[] {
    return this.artifactPathOptions;
  }

  setTypeOptions(typeOptions: IMultiSelectOption[]) {
    this.typeOptions = typeOptions;
  }

  getTypeOptions(): IMultiSelectOption[] {
    return this.typeOptions;
  }

  setTechnologyOptions(technologyOptions: IMultiSelectOption[]) {
    this.technologyOptions = technologyOptions;
  }

  getTechnologyOptions(): IMultiSelectOption[] {
    return this.technologyOptions;
  }

  setModeOptions(modeOptions: IMultiSelectOption[]) {
    this.modeOptions = modeOptions;
  }

  getModeOptions(): IMultiSelectOption[] {
    return this.modeOptions;
  }

  setDomainOptions(domainOptions: IMultiSelectOption[]) {
    this.domainOptions = domainOptions;
  }

  getDomainOptions(): IMultiSelectOption[] {
    return this.domainOptions;
  }

  setClusterOptions(clusterOptions: IMultiSelectOption[]) {
    this.clusterOptions = clusterOptions;
  }

  getClusterOptions(): IMultiSelectOption[] {
    return this.clusterOptions;
  }

  setRequestTypeOptionsModel(requestTypeOptionsModel: IMultiSelectOption[]) {
    this.requestTypeOptionsModel = requestTypeOptionsModel;
  }

  getRequestTypeOptionsModel(): IMultiSelectOption[] {
    return this.requestTypeOptionsModel;
  }

  setApplicationOptionsModel(applicationOptionsModel: IMultiSelectOption[]) {
    this.applicationOptionsModel = applicationOptionsModel;
  }

  getApplicationOptionsModel(): IMultiSelectOption[] {
    return this.applicationOptionsModel;
  }

  setEnvironmentOptionsModel(environmentOptionsModel: IMultiSelectOption[]) {
    this.environmentOptionsModel = environmentOptionsModel;
  }

  getEnvironmentOptionsModel(): IMultiSelectOption[] {
    return this.environmentOptionsModel;
  }

  setVmOptionsModel(vmOptionsModel: IMultiSelectOption[]) {
    this.vmOptionsModel = vmOptionsModel;
  }

  getVmOptionsModel(): IMultiSelectOption[] {
    return this.vmOptionsModel;
  }

  setJvmOptionsModel(jvmOptionsModel: IMultiSelectOption[]) {
    this.jvmOptionsModel = jvmOptionsModel;
  }

  getJvmOptionsModel(): IMultiSelectOption[] {
    return this.jvmOptionsModel;
  }

  setTaskOptionsModel(taskOptionsModel: IMultiSelectOption[]) {
    this.taskOptionsModel = taskOptionsModel;
  }

  getTaskOptionsModel(): IMultiSelectOption[] {
    return this.taskOptionsModel;
  }

  setArtifactOptionsModel(artifactOptionsModel: IMultiSelectOption[]) {
    this.artifactOptionsModel = artifactOptionsModel;
  }

  getArtifactOptionsModel(): IMultiSelectOption[] {
    return this.artifactOptionsModel;
  }

  setArtifactPathOptionsModel(artifactPathOptionsModel: IMultiSelectOption[]) {
    this.artifactPathOptionsModel = artifactPathOptionsModel;
  }

  getArtifactPathOptionsModel(): IMultiSelectOption[] {
    return this.artifactPathOptionsModel;
  }

  setTypeOptionsModel(typeOptionsModel: IMultiSelectOption[]) {
    this.typeOptionsModel = typeOptionsModel;
  }

  getTypeOptionsModel(): IMultiSelectOption[] {
    return this.typeOptionsModel;
  }

  setTechnologyOptionsModel(technologyOptionsModel: IMultiSelectOption[]) {
    this.technologyOptionsModel = technologyOptionsModel;
  }

  getTechnologyOptionsModel(): IMultiSelectOption[] {
    return this.technologyOptionsModel;
  }

  setModeOptionsModel(modeOptionsModel: IMultiSelectOption[]) {
    this.modeOptionsModel = modeOptionsModel;
  }

  getModeOptionsModel(): IMultiSelectOption[] {
    return this.modeOptionsModel;
  }

  setDomainOptionsModel(domainOptionsModel: IMultiSelectOption[]) {
    this.domainOptionsModel = domainOptionsModel;
  }

  getDomainOptionsModel(): IMultiSelectOption[] {
    return this.domainOptionsModel;
  }

  setClusterOptionsModel(clusterOptionsModel: IMultiSelectOption[]) {
    this.clusterOptionsModel = clusterOptionsModel;
  }

  getClusterOptionsModel(): IMultiSelectOption[] {
    return this.clusterOptionsModel;
  }

  setSelectedRequestTypeOptions(selectedRequestTypeOptions: any[]) {
    this.selectedRequestTypeOptions = selectedRequestTypeOptions;
  }

  getSelectedRequestTypeOptions(): any[] {
    return this.selectedRequestTypeOptions;
  }

  getSelectedApplicationOptions(): any[] {
    return this.selectedApplicationOptions;
  }

  setSelectedApplicationOptions(selectedApplicationOptions: any[]) {
    this.selectedApplicationOptions = selectedApplicationOptions;
  }

  getSelectedEnvironmentOptions(): any[] {
    return this.selectedEnvironmentOptions;
  }

  setSelectedEnvironmentOptions(selectedEnvironmentOptions: any[]) {
    this.selectedEnvironmentOptions = selectedEnvironmentOptions;
  }
  getSelectedTypeOptions(): any[] {
    return this.selectedTypeOptions;
  }

  setSelectedTypeOptions(selectedTypeOptions: any[]) {
    this.selectedTypeOptions = selectedTypeOptions;
  }

  getSelectedTechnologyOptions(): any {
    return this.selectedTechnologyOptions;
  }

  setSelectedTechnologyOptions(selectedTechnologyOptions: any[]) {
    this.selectedTechnologyOptions = selectedTechnologyOptions;
  }

  getSelectedModeOptions(): any[] {
    return this.selectedModeOptions;
  }

  setSelectedModeOptions(selectedModeOptions: any[]) {
    this.selectedModeOptions = selectedModeOptions;
  }

  getSelectedDomainOptions(): any[] {
    return this.selectedDomainOptions;
  }

  setSelectedDomainOptions(selectedDomainOptions: any[]) {
    this.selectedDomainOptions = selectedDomainOptions;
  }

  getSelectedClusterOptions(): any[] {
    return this.selectedClusterOptions;
  }

  setSelectedClusterOptions(selectedClusterOptions: any[]) {
    this.selectedClusterOptions = selectedClusterOptions;
  }

  getSelectedVmOptions(): any[] {
    return this.selectedVmOptions;
  }

  setSelectedVmOptions(selectedVmOptions: any[]) {
    this.selectedVmOptions = selectedVmOptions;
  }

  getSelectedJvmOptions(): any[] {
    return this.selectedJvmOptions;
  }

  setSelectedJvmOptions(selectedJvmOptions: any[]) {
    this.selectedJvmOptions = selectedJvmOptions;
  }

  getSelectedTaskOptions(): any[] {
    return this.selectedTaskOptions;
  }

  setSelectedTaskOptions(selectedTaskOptions: any[]) {
    this.selectedTaskOptions = selectedTaskOptions;
  }

  getSelectedArtifactOptions(): String[] {
    return this.selectedArtifactOptions;
  }

  setSelectedArtifactOptions(selectedArtifactOptions: String[]) {
    this.selectedArtifactOptions = selectedArtifactOptions;
  }

  getSelectedArtifactPathOptions(): any[] {
    return this.selectedArtifactPathOptions;
  }

  setSelectedArtifactPathOptions(selectedArtifactPathOptions: any[]) {
    this.selectedArtifactPathOptions = selectedArtifactPathOptions;
  }

  getIsValidTicketNumber(): boolean {
    return this.isValidTicketNumber;
  }

  setIsValidTicketNumber(isValidTicketNumber: boolean) {
    this.isValidTicketNumber = isValidTicketNumber;
  }

}
