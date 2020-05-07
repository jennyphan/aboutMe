import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/model/user';

@Injectable()
export class DatabaseService {

    private INPUTBACKEND_API_URL = 'https://ww4t45q56m.execute-api.us-east-1.amazonaws.com/dev/form/';
    private REGISTER_API_URL = 'https://3hggg1h4o7.execute-api.us-east-1.amazonaws.com/dev/form/';

    constructor(private http: HttpClient) { }

    createComment(lastName, firstName, email, comments): Observable<any> {

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const INFO = Object.assign(lastName, firstName, email, comments);
        const body = JSON.stringify(INFO);
        return this.http.post(this.INPUTBACKEND_API_URL, body, options);
    }

    getComments(id: string) {
        return this.http.get(this.INPUTBACKEND_API_URL + id);
    }


    createRegisteredUser(lastName, firstName, email, userName, password, adminFlg) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const user: User = {
            'id': 1, 'userName': userName, 'password': password, 'firstName': firstName, 'lastName': lastName, 'email': email, 'adminFlg': adminFlg
        };

        console.log(user);
        const body = JSON.stringify(user);
        console.log(body);
        return this.http.post(this.REGISTER_API_URL, body, options);
    }

    getRegisteredUser(id: string): Observable<User[]> {
        return this.http.get<User[]>(this.REGISTER_API_URL + id);
    }

}