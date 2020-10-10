import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';
import { API } from './api';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    hasUser : boolean = false;

    constructor(private http: HttpClient, private api: API) {
    }

    login(username: string, password: string) {
        return this.api.get(`/api/users`)
            .pipe(map(user => {

                var res = [];
                for (var x in user) {
                    user.hasOwnProperty(x) && res.push(user[x])
                }
                res.forEach(element => {
                    if(element["Username"] === username && element["Password"] === password){
                        localStorage.setItem('userName', element["Username"]);
                        localStorage.setItem('Name', element["Usermail"]);
                        this.hasUser = true;
                    }
                });

                return this.hasUser;
            }));
    }

    logout() {
        localStorage.removeItem('userName');
        localStorage.removeItem('Name');
    }
}