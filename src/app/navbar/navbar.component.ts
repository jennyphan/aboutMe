import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private authenticationService: AuthenticationService,
    private dialogService: DialogService) {
  }


  isUserLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return 'Y';
    } else {
      return 'N';
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  login() {
    // this.router.navigate(['/login']);
    this.dialogService.addDialog(LoginComponent, {}, { closeByClickingOutside: true });
  }

  register() {
    // this.router.navigate(['/register']);
    this.dialogService.addDialog(RegisterComponent, {}, { closeByClickingOutside: true });
  }
}
