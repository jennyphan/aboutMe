import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../shared/model/user';

@Injectable()
export class AuthenticationService {
    public users: User[];

    constructor(private http: Http) { }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
