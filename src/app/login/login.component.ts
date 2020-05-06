import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleModalComponent, SimpleModalService } from "ngx-simple-modal";
import { RegisterComponent } from '../register';
import { User } from '../shared/model/user';
import { DatabaseService } from '../shared/services/database.service';
import { AuthenticationService, ModalAlertService } from '../shared/services/index';

export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  templateUrl: 'login.component.html',
  providers: [DatabaseService]
})

export class LoginComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  title: string;
  message: string;

  public users: User[];
  constructor(private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: ModalAlertService,
    private database: DatabaseService,
    private simpleModalService: SimpleModalService) {
    super();
  }

  ngOnInit() {
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    this.result = true;
    this.close();
    this.simpleModalService.addModal(RegisterComponent, { title: '', message: '' });
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


