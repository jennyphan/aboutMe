import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../shared/model/user';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { SharedAccountService } from '../../shared/service/shared-account-service.component';


@Component({
    selector: 'app-account-header',
    templateUrl: './account-header.component.html',
    styleUrls: ['./account-header.component.css'],

})
export class AccountHeaderComponent implements OnInit {
    private currentUser: User;

    public searchCaseNumber = '';

    constructor(private sharedAccountService: SharedAccountService, private router: Router, private authenticationService: AuthenticationService) {
        this.sharedAccountService.caseNumber$.subscribe(
            data => {
                console.log('Sibling1Component-received from admin or general: ' + data);
                this.searchCaseNumber = data;

            })
    }

    ngOnInit() {

    }
}
