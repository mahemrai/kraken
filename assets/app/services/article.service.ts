import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Article} from '../models/article';

/**
 * Article service handles all the logic associated with managing articles.
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
    protected token:string;

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
     * @param {Article} article
     * @return Observable
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
     * @return Observable
     */
    public getFeed()
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('/article', options)
                   .map((res:Response) => {return res.json()});
    }

    /**
     * Save article to user's library.
     * @param {Article} article
     * @return Observable
     */
    public saveToLibrary(article:Article)
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('/library', article, options)
                   .map((res:Response) => {return res.json()});
    }

    public getUserLibrary()
    {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('/library', options)
                   .map((res:Response) => {return res.json()});
    }
}