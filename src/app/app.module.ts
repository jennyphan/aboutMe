import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SimpleModalModule } from 'ngx-simple-modal';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { DanceComponent } from './dance/dance.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { SharedAccountService } from './myaccount/shared/service/shared-account-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/index';
import { AlertComponent } from './shared/directives/alert/index';
import { ModalAlertComponent } from './shared/directives/modal-alert/index';
import { AuthGuard } from './shared/guards/index';
// used to create fake backend
//import { fakeBackendProvider } from './shared/helpers/index';
import { AlertService, AuthenticationService, ModalAlertService, UserService } from './shared/services/index';
import { UserListComponent } from './user-list/user-list.component';
import { WorkComponent } from './work/work.component';



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
    HttpClientModule,
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SimpleModalModule
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
    //fakeBackendProvider,
    // HttpRequest,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
