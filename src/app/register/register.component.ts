import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { AlertService, UserService } from '../shared/services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent extends DialogComponent<null, boolean> {
    model: any = {};
    loading = false;

    constructor(dialogService: DialogService,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {
        super(dialogService);
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.close();
                this.router.navigate(['']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
