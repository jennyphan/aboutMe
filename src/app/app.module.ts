import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SimpleModalModule } from 'ngx-simple-modal';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { SharedAccountService } from './myaccount/shared/service/shared-account-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/index';
import { ModalAlertComponent } from './shared/directives/modal-alert/index';
import { AuthGuard } from './shared/guards/index';
import { AlertService, AuthenticationService, ModalAlertService, UserService } from './shared/services/index';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ModalAlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SimpleModalModule,
    SharedModule
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
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
