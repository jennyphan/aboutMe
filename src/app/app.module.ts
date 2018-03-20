import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { SharedAccountService } from './myaccount/shared/service/shared-account-service.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';


// used to create fake backend
import { fakeBackendProvider } from './shared/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertComponent } from './shared/directives/alert/index';
import { ModalAlertComponent } from './shared/directives/modal-alert/index';
import { ModalAlertService, AlertService, UserService, AuthenticationService } from './shared/services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { AuthGuard } from './shared/guards/index';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { DanceComponent } from './dance/dance.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AlertComponent,
    ModalAlertComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DanceComponent,
    WorkComponent,
    ContactComponent,
    ContactListComponent,
    UserListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BootstrapModalModule
  ],
  entryComponents: [
        LoginComponent,
        RegisterComponent
      ],
  providers: [
    SharedAccountService,
    AuthGuard,
    AlertService,
    ModalAlertService,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
