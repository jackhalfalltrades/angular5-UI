export class Job {

    constructor() {}

    jobId: string;
    jobType: String;
    jobParam: String;
    startTime: String;
    requestType: String;
    requestNumber: String;
    application: String;
    submittedBy: String;
    submittedDate: String;
    jobStatus: String;

    jobDetails: {jobId: String, jobType: String, jobParam: String, startTime: String, requestType: String,
        requestNumber: String, application: String, submittedBy: String, submittedDate: String, jobStatus: String};

    setJobId(jobId: string) {
        this.jobId = jobId;
    }

    getJobId(): String {
        return this.jobId;
    }

    setJobType(jobType: String) {
        this.jobType = jobType;
    }

    getJobType(): String {
        return this.jobType;
    }

    setJobParam(jobParam: String) {
        this.jobParam = jobParam;
    }

    getJobParam(): String {
        return this.jobParam;
    }

    setStartTime(startTime: String) {
        this.startTime = startTime;
    }

    getStartTime(): String {
        return this.startTime;
    }

    setRequestType(requestType: String) {
        this.requestType = requestType;
    }

    getRequestType(): String {
        return this.requestType;
    }

    setRequestNumber(requestNumber: String) {
        this.requestNumber = requestNumber;
    }

    getRequestNumber(): String {
        return this.requestNumber;
    }

    setApplication(application: String) {
        this.application = application;
    }

    getApplication(): String {
        return this.application;
    }

    setSubmittedBy(submittedBy: String) {
        this.submittedBy = submittedBy;
    }

    getSubmittedBy(): String {
        return this.submittedBy;
    }

    setSubmittedDate(submittedDate: String) {
        this.submittedDate = submittedDate;
    }

    getSubmittedDate(): String {
        return this.submittedDate;
    }

    setJobStatus(jobStatus: String) {
        this.jobStatus = jobStatus;
    }

    getJobStatus(): String {
        return this.jobStatus;
    }

    setJobDetails() {
        this.jobDetails =  {jobId: this.getJobId().toString(), jobType: this.getJobType().toString(),
            jobParam: this.getJobParam().toString(), startTime: this.getStartTime().toString(),
            requestType: this.getRequestType().toString(), requestNumber: this.getRequestNumber().toString(),
            application: this.getApplication().toString(), submittedBy: this.getSubmittedBy().toString(),
            submittedDate: this.getSubmittedDate().toString(), jobStatus: this.getJobStatus().toString()};
    }

    getJobDetails(): any {
        return this.jobDetails;
    }
}
