import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('/api/users', this.jwtHeader());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwtHeader());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwtHeader());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwtHeader());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwtHeader());
    }

    private jwtHeader() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token });
            return { headers: headers };
        }
    }
}
