import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/model/user';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { SharedAccountService } from '../shared/service/shared-account-service.component';


@Component({
    selector: 'app-admin-account',
    templateUrl: './admin-account.component.html',
    styleUrls: ['./admin-account.component.css'],

})
export class AdminAccountComponent implements OnInit {
    private currentUser: User;
    private searchCaseNumber = '';

    constructor(private sharedAccountService: SharedAccountService, private router: Router, private authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.searchCaseNumber = 'admin page';
        this.sharedAccountService.publishData(this.searchCaseNumber);
    }
}
