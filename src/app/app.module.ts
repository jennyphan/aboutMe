import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CarouselComponent } from './carousel/carousel.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { firebaseConfig } from '../environments/firebase.config';

// used to create fake backend
import { fakeBackendProvider } from './shared/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertComponent } from './shared/directives/index';
import { AlertService, UserService, AuthenticationService } from './shared/services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProductComponent } from './product/index';
import { AuthGuard } from './shared/guards/index';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SearchComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
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
