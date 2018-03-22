import { Job } from './job.model';
import { JobDeployDao } from './job-deploy.dao';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-deploy',
  templateUrl: './job-deploy.component.html',
  styleUrls: ['./job-deploy.component.css'],
  providers: [JobDeployDao]
})
export class JobDeployComponent implements OnInit {
  isNewPaneActive: boolean;
  jobStatus: String;
  jobList: Job[] = [];
  job: Job;

  constructor(private router: Router, private jobDeployDao: JobDeployDao) { }

  ngOnInit() {
    this.isNewPaneActive = true;
    this.jobDeployDao.loadNewJob()
      .subscribe(
      (response) => {
        for (const res of response) {
          this.job = new Job();
          this.job.setJobId(res['jobID']);
          this.job.setJobType(res['jobType']);
          this.job.setJobParam(res['jobParam']);
          this.job.setCreatedAt(res['createdAt']);
          this.job.setRequestType(res['requestType']);
          this.job.setRequestNumber(res['requestNumber']);
          this.job.setApplication(res['application']);
          this.job.setCreatedBy(res['createdBy']);
          this.job.setJobStatus(res['jobStatus']);
          this.jobList.push(this.job);
        }
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: any) => {
        console.log(error);
      }
    );
  }

  onClickPaneToggle(isNewPaneActive: boolean) {
    this.isNewPaneActive = isNewPaneActive;
    this.jobList = [];
    if (isNewPaneActive) {
      this.jobDeployDao.loadNewJob()
        .subscribe(
        (response) => {
          for (const res of response) {
            this.job = new Job();
            this.job.setJobId(res['jobID']);
            this.job.setJobType(res['jobType']);
            this.job.setJobParam(res['jobParam']);
            this.job.setCreatedAt(res['createdAt']);
            this.job.setRequestType(res['requestType']);
            this.job.setRequestNumber(res['requestNumber']);
            this.job.setApplication(res['application']);
            this.job.setCreatedBy(res['createdBy']);
            this.job.setJobStatus(res['jobStatus']);
            this.jobList.push(this.job);
          }
        },
        // tslint:disable-next-line:no-shadowed-variable
        (error: any) => {
          console.log(error);
        }
        );
    } else {
      this.jobDeployDao.loadNotNewJob()
        .subscribe(
        (response) => {
          for (const res of response) {
            this.job = new Job();

            this.job.setJobId(res['jobID']);
            this.job.setJobType(res['jobType']);
            this.job.setJobParam(res['jobParam']);
            this.job.setCreatedAt(res['createdAt']);
            this.job.setRequestType(res['requestType']);
            this.job.setRequestNumber(res['requestNumber']);
            this.job.setApplication(res['application']);
            this.job.setCreatedBy(res['createdBy']);
            this.job.setJobStatus(res['jobStatus']);
            this.job.setSubmittedAt(res['submittedAt']);
            this.job.setSubmittedBy(res['submittedBy']);
            this.jobList.push(this.job);
          }
        },
        // tslint:disable-next-line:no-shadowed-variable
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  buildJob(event: Event) {
    this.jobDeployDao.buildJob(event)
      .subscribe(
      (response) => {
        alert('Job: ' + response['jobID'] + 'status: ' + response['status']);
        this.router.navigate(['/jobDeploy']);
      }
    );
  }
}
