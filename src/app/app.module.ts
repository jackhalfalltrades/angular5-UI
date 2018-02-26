import { JobCreateDao } from './jobcreate/jobCreate.dao';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MultiselectDropdownModule  } from 'angular-2-dropdown-multiselect';
import { DropdownDirective } from './ng-driectives/dropdown.directive';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { AuthService } from './auth/auth.service';
import { AuthGaurd } from './auth/auth-gaurd.service';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { JobDeployComponent } from './job-deploy/job-deploy.component';
import { AuthDAO } from './auth/auth.dao';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    DropdownDirective,
    JobcreateComponent,
    JobDeployComponent
  ],
  imports: [
    MultiselectDropdownModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGaurd, AuthDAO],
  bootstrap: [AppComponent]
})
export class AppModule { }
