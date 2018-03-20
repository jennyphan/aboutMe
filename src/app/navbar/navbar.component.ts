import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router, NavigationStart } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { User } from '../shared/model/user';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: []
})
export class NavbarComponent {
  private currentUser: User;
  private isHome = false;


  constructor(private router: Router, private authenticationService: AuthenticationService,
    private dialogService: DialogService) {

    router.events
      .filter(event => event instanceof NavigationStart)
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
    this.dialogService.addDialog(LoginComponent, {}, { closeByClickingOutside: true });
  }

  register() {
    this.dialogService.addDialog(RegisterComponent, {}, { closeByClickingOutside: true });
  }
}
