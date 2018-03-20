import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { DatabaseService } from '../shared/services/database.service';
import { ModalAlertService, UserService } from '../shared/services/index';

import { LoginComponent } from '../login/login.component';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [DatabaseService]
})

export class RegisterComponent extends DialogComponent<null, boolean> {
    model: any = {};
    loading = false;
    public SUCCESS_MSG = 'Registration Successful';

    constructor(private database: DatabaseService, dialogService: DialogService,
        private router: Router,
        private userService: UserService,
        private alertService: ModalAlertService) {
        super(dialogService);
    }

    handleRegistration() {
        this.alertService.clearMessage();
        this.database.getRegisteredUser('').subscribe(data => {
            const doesUserExist = this.doesUserExist(data);
            if (!doesUserExist) {
                this.registerUser();
            } else {
                this.alertService.error('User name exists');
            }
        });
    }

    registerUser() {
        const adminFlg = 'N';
        this.database.createRegisteredUser(this.model.lastName, this.model.firstName,
            this.model.email, this.model.userName, this.model.password, adminFlg).subscribe(
            data => {
                this.registrationSuccess();
            },
            error => {
                this.alertService.error('Error registering user');
                return Observable.throw(error);
            });
    }

    registrationSuccess() {
        this.alertService.success('Registration successful', true);
        setTimeout(() => {
            // tslint:disable-next-line:no-unused-expression
            this.close(),
                this.dialogService.addDialog(LoginComponent, {}, { closeByClickingOutside: true });
        }, 2000);
    }

    doesUserExist(data) {
        const users = data;
        let userExist = false;
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.userName === this.model.userName) {
                userExist = true;
            }
        }
        return userExist;
    }

}
