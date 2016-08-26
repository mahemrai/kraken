import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../models/user';

/**
 * @class AuthService
 */
@Injectable()
export class AuthService {
    /**
     * @property http
     * @type {Http}
     */
    protected http:Http;

    /**
     * @param {Http} http
     */
    constructor(http:Http) {
        this.http = http;
    }

    /**
     * Authenticate user with the provided credentials.
     * @param {User} user
     * @return Observable
     */
    public authenticate(user:User) {
        return this.http.post('/auth/login', user)
                   .map((res:Response) => { 
                       return res.json() 
                   });
    }

    /**
     * Complete authentication process by retrieving JSON Web Token
     * for the user and storing it in the local storage.
     */
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

    /**
     * Register user with the provided details.
     * @param {User} user
     * @return Observable
     */
    public register(user:User) {
        return this.http.post('/user/register', user)
                   .map((res:Response) => {
                       return res.json()
                    });
    }

    /**
     * Check if the user is already logged in.
     * @return Observable
     */
    public loggedIn() {
        return this.http.get('/user/jwt')
                   .map((res:Response) => {
                       return res.json()
                   });
    }
}