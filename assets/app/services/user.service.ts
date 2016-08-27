import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class UserService
{
    protected http:Http;

    protected token:String;

    constructor(http:Http)
    {
        this.http = http;
        this.token = JSON.parse(localStorage.getItem('token')).token;
    }

    public getUserInfo()
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('/user/profile', options)
                   .map((res:Response) => {return res.json()});
    }

    private createAuthorisationHeader()
    {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return headers;
    }
}