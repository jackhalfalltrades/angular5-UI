import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDeployComponent } from './job-deploy.component';

describe('JobDeployComponent', () => {
  let component: JobDeployComponent;
  let fixture: ComponentFixture<JobDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
