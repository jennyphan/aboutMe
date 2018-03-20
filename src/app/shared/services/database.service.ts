import { Injectable, Input } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from '../../shared/model/user';


@Injectable()
export class DatabaseService {

    private INPUTBACKEND_API_URL = 'https://ww4t45q56m.execute-api.us-east-1.amazonaws.com/dev/form/';
    private REGISTER_API_URL = 'https://3hggg1h4o7.execute-api.us-east-1.amazonaws.com/dev/form/';

    constructor(private http: Http) { }

    createComment(lastName, firstName, email, comments) {
        console.log(lastName, firstName, email, comments);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const INFO = Object.assign(lastName, firstName, email, comments);
        const body = JSON.stringify(INFO);
        return this.http.post(this.INPUTBACKEND_API_URL, body, options).map((res: Response) => res.json());
    }

    getComments(id: string) {
        return this.http.get(this.INPUTBACKEND_API_URL + id)
            .map((res: Response) => res.json());
    }


    createRegisteredUser(lastName, firstName, email, userName, password, adminFlg) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const user: User = {
            'id': 1, 'userName': userName, 'password': password, 'firstName': firstName, 'lastName': lastName, 'email': email, 'adminFlg': adminFlg};

        console.log(user);
        const body = JSON.stringify(user);
        console.log(body);
        return this.http.post(this.REGISTER_API_URL, body, options).map((res: Response) => res.json());
    }

    getRegisteredUser(id: string) {
        return this.http.get(this.REGISTER_API_URL + id)
            .map((res: Response) => res.json());
    }

}