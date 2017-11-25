import { JobDeployComponent } from './job-deploy/job-deploy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGaurd } from './auth/auth-gaurd.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component: SigninComponent },
    { path: 'jobCreate', component: JobcreateComponent, canActivate: [AuthGaurd] },
    { path: 'jobDeploy', component: JobDeployComponent, canActivate: [AuthGaurd] }
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
