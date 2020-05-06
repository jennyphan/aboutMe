import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Observable } from 'rxjs';
import { ConfirmModel } from '../login/login.component';
import { DatabaseService } from '../shared/services/database.service';
import { ModalAlertService, UserService } from '../shared/services/index';

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [DatabaseService]
})

export class RegisterComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
    model: any = {};
    loading = false;
    public SUCCESS_MSG = 'Registration Successful';
    title: string;
    message: string;

    constructor(private database: DatabaseService,
        private router: Router,
        private userService: UserService,
        private alertService: ModalAlertService) {
        super();
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
            this.close()
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
