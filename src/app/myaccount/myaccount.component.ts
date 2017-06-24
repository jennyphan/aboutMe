import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';


@Component({
    selector: 'app-account',
    templateUrl: './myaccount.component.html',
    styleUrls: ['./myaccount.component.css'],

})
export class MyAccountComponent implements OnInit {
    private currentUser: User;

    constructor(private router: Router, private authenticationService: AuthenticationService) {
        console.log('finished constructor');
    }

    ngOnInit() {

    }
}
