import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-deploy',
  templateUrl: './job-deploy.component.html',
  styleUrls: ['./job-deploy.component.css']
})
export class JobDeployComponent implements OnInit {
  isNewPaneactive: boolean;
  constructor() { }

  ngOnInit() {
    this.isNewPaneactive = true;
  }

  onClickPaneToggle(tabName: boolean) {
    console.log(tabName);
   this.isNewPaneactive = tabName;
    console.log(this.isNewPaneactive);
  }

}
