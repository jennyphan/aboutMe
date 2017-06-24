import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AlertComponent } from './shared/directives/index';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertService, UserService, AuthenticationService } from './shared/services/index';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        AlertComponent
      ],
      providers: [ AuthenticationService, AlertService, UserService ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
