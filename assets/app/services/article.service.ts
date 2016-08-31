import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Article} from '../models/article';

/**
 * @class ArticleService
 */
@Injectable()
export class ArticleService
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
     * Scrape and add article to database when a user submits the link.
     * @param {Article} article [description]
     */
    public shareArticle(article:Article)
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('/article', article, options)
                   .map((res:Response) => {return res.json()});
    }

    /**
     * Fetch list of recently shared articles.
     */
    public getFeed()
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('/article', options)
                   .map((res:Response) => {return res.json()});
    }
}