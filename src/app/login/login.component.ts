import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { ModalAlertService, AuthenticationService } from '../shared/services/index';
import { RegisterComponent } from '../register/register.component';
import { DatabaseService } from '../shared/services/database.service';
import { User } from '../shared/model/user';

@Component({
  templateUrl: 'login.component.html',
  providers: [DatabaseService]
})

export class LoginComponent extends DialogComponent<null, boolean> implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  public users: User[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: ModalAlertService,
    dialogService: DialogService,
    private database: DatabaseService) {

    super(dialogService);
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    this.close();
    this.dialogService.addDialog(RegisterComponent, {}, { closeByClickingOutside: true });
  }

  /**
   * Login to the application and navigate to home page if authorized user
   * @param text  Comment for parameter ´text´.
   */
  login() {
    this.loading = true;
    this.alertService.clearMessage();
    localStorage.removeItem('currentUser');
    this.database.getRegisteredUser('').subscribe(data => this.handleLogin(data));
    this.loading = false;
  }

  handleLogin(data) {
    this.users = data;
    let userFound = false;
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];

      if (user.userName === this.model.userName && this.model.password === user.password) {
        userFound = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }

    if (userFound) {
      this.close();
    } else {
      this.alertService.error('User not found or incorrect password');
    }
  }
}


