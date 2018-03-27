import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MultiselectDropdownModule  } from 'angular-2-dropdown-multiselect';
import { CookieService } from 'ngx-cookie-service';

import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthDAO } from './auth/auth.dao';
import { AuthGaurd } from './auth/auth-gaurd.service';
import { SignoutComponent } from './auth/signout/signout.component';
import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { JobCreateDao } from './jobcreate/jobCreate.dao';
import { JobDeployComponent } from './job-deploy/job-deploy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignoutComponent,
    JobcreateComponent,
    JobDeployComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MultiselectDropdownModule,
  ],
  providers: [AuthService, AuthGaurd, AuthDAO, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
