import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/model/user';

@Injectable()
export class AuthenticationService {
    public users: User[];

    constructor(private http: HttpClient) { }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
