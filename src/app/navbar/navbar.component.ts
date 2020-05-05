import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SimpleModalService } from "ngx-simple-modal";
import { filter } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { User } from '../shared/model/user';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: []
})
export class NavbarComponent {
  public currentUser: User;
  public isHome = false;


  constructor(private router: Router, private authenticationService: AuthenticationService,
    private simpleModalService: SimpleModalService) {

    router.events.pipe(
      filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.isHome = false;
        if (event.url === '/home') {
          this.isHome = true;
        }
        // You only receive NavigationStart events
      });

  }

  isAdmin() {
    return 'Y';
  }

  isUserLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return 'Y';
    } else {
      return 'N';
    }
  }

  isUserAdmin() {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentUser.adminFlg === 'Y') {
        return 'Y';
      } else {
        return 'N';
      }
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

  login() {
    this.simpleModalService.addModal(LoginComponent, { title: '', message: '' });
  }

  register() {
    this.simpleModalService.addModal(RegisterComponent, { title: '', message: '' });
  }
}
