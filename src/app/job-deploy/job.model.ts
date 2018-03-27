export class Job {

    constructor() { }

    jobId: any;
    jobType: any;
    jobParam: any;
    createdAt: any;
    requestType: any;
    requestNumber: any;
    application: any;
    createdBy: any;
    jobStatus: any;
    submittedBy: any;
    submittedAt: any;

    jobDetails: {
        jobId: any, jobType: any, jobParam: any, createdAt: any, requestType: any,
        requestNumber: any, application: any, createdBy: any, jobStatus: any,
        submittedBy: any, submittedAt: any
    };

    setJobId(jobId: any) {
        this.jobId = jobId;
    }

    getJobId(): any {
        return this.jobId;
    }

    setJobType(jobType: any) {
        this.jobType = jobType;
    }

    getJobType(): any {
        return this.jobType;
    }

    setJobParam(jobParam: any) {
        this.jobParam = jobParam;
    }

    getJobParam(): any {
        return this.jobParam;
    }

    setCreatedAt(createdAt: any) {
        this.createdAt = createdAt;
    }

    getCreatedAt(): any {
        return this.createdAt;
    }

    setRequestType(requestType: any) {
        this.requestType = requestType;
    }

    getRequestType(): any {
        return this.requestType;
    }

    setRequestNumber(requestNumber: any) {
        this.requestNumber = requestNumber;
    }

    getRequestNumber(): any {
        return this.requestNumber;
    }

    setApplication(application: any) {
        this.application = application;
    }

    getApplication(): any {
        return this.application;
    }

    setCreatedBy(createdBy: any) {
        this.createdBy = createdBy;
    }

    getCreatedBy(): any {
        return this.createdBy;
    }

    setJobStatus(jobStatus: any) {
        this.jobStatus = jobStatus;
    }

    getJobStatus(): any {
        return this.jobStatus;
    }

    setSubmittedBy(submittedBy: any) {
        this.submittedBy = submittedBy;
    }

    getSubmittedBy(): any {
        return this.submittedBy;
    }

    setSubmittedAt(submittedAt: any) {
        this.submittedAt = submittedAt;
    }

    getSubmittedAt(): any {
        return this.submittedAt;
    }

    // setJobDetails() {
    //     this.jobDetails =  {jobId: this.getJobId().toString(), jobType: this.getJobType().toString(),
    //         jobParam: this.getJobParam().toString(), createdAt: this.getCreatedAt().toString(),
    //         requestType: this.getRequestType().toString(), requestNumber: this.getRequestNumber().toString(),
    //         application: this.getApplication().toString(), createdBy: this.getCreatedBy().toString(),
    //         jobStatus: this.getJobStatus().toString(), submittedAt: this.getSubmittedAt().toString,
    //         submittedBy: this.getSubmittedBy().toString};
    // }

    // getJobDetails(): any {
    //     return this.jobDetails;
    // }
}
