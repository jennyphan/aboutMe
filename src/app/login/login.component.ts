import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { AlertService, AuthenticationService } from '../shared/services/index';
import { RegisterComponent } from '../register/register.component';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent extends DialogComponent<null, boolean> implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    dialogService: DialogService) {

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
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.close();
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
