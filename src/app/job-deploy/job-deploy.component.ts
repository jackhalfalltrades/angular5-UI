import { Job } from './job.model';
import { JobDeployDao } from './job-deploy.dao';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-job-deploy',
  templateUrl: './job-deploy.component.html',
  styleUrls: ['./job-deploy.component.css'],
  providers: [JobDeployDao]
})
export class JobDeployComponent implements OnInit {
  isNewPaneactive: boolean;
  jobStatus: String;

  jobList: Job[]= [];
  job: Job;

  constructor(private jobDeployDao: JobDeployDao) { }

  ngOnInit() {
    this.isNewPaneactive = true;
    this.jobDeployDao.loadNewJob()
    .subscribe(
      (response) => {
        for (const res of response) {
           this.job = new Job();

          this.job.setJobId(res['job_id']);
          this.job.setJobType(res['job_type']);
          this.job.setJobParam(res['job_param']);
          this.job.setStartTime(res['scheduled_startTime']);
          this.job.setRequestType(res['request_type']);
          this.job.setRequestNumber(res['request_number']);
          this.job.setApplication(res['application']);
          this.job.setSubmittedBy(res['job_submittedBy']);
          this.job.setSubmittedDate(res['job_submittedDate']);
          this.job.setJobStatus(res['job_status']);
          this.job.setJobDetails();
          this.jobList.push(this.job);
        }
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: any) => {
          console.log(error);
      }

  );

  }

  onClickPaneToggle(tabName: boolean) {
    console.log(tabName);
   this.isNewPaneactive = tabName;
  }

  buildJob(event: Event) {
    this.jobDeployDao.buildJob(event)
    .subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
