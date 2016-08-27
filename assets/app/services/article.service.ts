import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ArticleService
{
    protected http:Http;

    protected token:String;

    constructor(http:Http)
    {
        this.http = http;
        this.token = JSON.parse(localStorage.getItem('token')).token;
    }

    public shareArticle(article)
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('/article', article, options)
                   .map((res:Response) => {return res.json()});
    }

    public getFeed()
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('/article', options)
                   .map((res:Response) => {return res.json()});
    }
}