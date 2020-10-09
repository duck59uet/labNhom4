import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';
import { API } from './api';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private api : API) {
    }


    login(username: string, password: string) {
        return this.api.get('/api/users')
            .pipe(map(user => {
                
                

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userName');
        this.currentUserSubject.next(null);
    }
}