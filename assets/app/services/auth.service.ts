import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../models/user';

@Injectable()
export class AuthService {
    /**
     * [http description]
     * @type {Http}
     */
    protected http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    public authenticate(user:User) {
        return this.http.post('/auth/login', user)
                   .map((res:Response) => { 
                       return res.json() 
                   });
    }

    public completeAuthentication() {
        this.http.get('/user/jwt')
           .map((res:Response) => res.json())
           .subscribe(
               function(data) {
                   localStorage.setItem('token', JSON.stringify(data));
                    window.location.href = '/dashboard';
               },
               function(err) { console.log(err); }
           );
    }

    public register(user:User) {
        return this.http.post('/user/register', user)
                   .map((res:Response) => {
                       return res.json()
                    });
    }

    public loggedIn() {
        return this.http.get('/user/jwt')
                   .map((res:Response) => {
                       return res.json()
                   });
    }
}