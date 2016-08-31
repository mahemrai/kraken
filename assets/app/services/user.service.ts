import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

/**
 * User Service class handles all the logic associated with a user entity
 * such as fetching user data or updating user data.
 * @class UserService
 */
@Injectable()
export class UserService
{
    /**
     * @property http
     * @type {Http}
     * @access protected
     */
    protected http:Http;

    /**
     * @property token
     * @type {String}
     * @access protected
     */
    protected token:String;

    /**
     * @param {Http} http
     */
    constructor(http:Http)
    {
        this.http = http;
        this.token = JSON.parse(localStorage.getItem('token')).token;
    }

    /**
     * Fetch information about the currently logged in user.
     */
    public getUserInfo()
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('/user/profile', options)
                   .map((res:Response) => {return res.json()});
    }
}