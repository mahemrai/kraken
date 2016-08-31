import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap/alert/alert';

import {Article} from '../models/article';
import {ArticleService} from '../services/article.service';

import * as io from 'socket.io-client';

@Component({
    selector: 'feed-screen',
    directives: [NgbAlert],
    providers: [ArticleService],
    templateUrl: 'app/dash/feed-screen.component.html'
})

/**
 * @class FeedScreenComponent
 */
export class FeedScreenComponent
{
    /**
     * @property article
     * @type {Article}
     * @access public
     */
    public article:Article;

    /**
     * @property feed
     * @type {Array<Article>}
     * @access public
     */
    public feed:Array<Article>;

    /**
     * @property articleService
     * @type {ArticleService}
     * @access public
     */
    private articleService:ArticleService;

    /**
     * @property message
     * @type {string}
     * @access public
     */
    public message:string;

    /**
     * @property type
     * @type {string}
     * @access public
     */
    public type:string;

    /**
     * @property socket
     * @access socket
     */
    protected socket;

    /**
     * @param {ArticleService} articleService
     */
    constructor(articleService:ArticleService)
    {
        this.article = new Article();
        this.articleService = articleService;

        // bind socket to the host
        this.socket = io('http://localhost:1337');
        this.socket.on('article_shared', function () {
            this.load();
        }.bind(this));
    }

    /**
     * Initialise the component and article model.
     */
    ngOnInit()
    {
        this.article.id = null;
        this.article.url = '';

        this.load();
    }

    /**
     * Handle article link submission.
     */
    public onSubmit()
    {
        this.articleService.shareArticle(this.article)
            .subscribe(
                res => {
                    this.type = 'success';
                    this.message = 'Thank you for sharing!!';
                    this.article.url = '';
                },
                err => {
                    console.log(err);
                    this.type = 'danger';
                    this.message = 'Could not share the article. Try again.'
                }
            );
    }

    /**
     * Load feed to display.
     */
    public load()
    {
        this.articleService.getFeed()
            .subscribe(
                res => this.feed = res,
                err => console.log(err)
            );
    }
}