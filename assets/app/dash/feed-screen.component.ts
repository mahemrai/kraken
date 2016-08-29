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

export class FeedScreenComponent
{
    public article:Article;

    public feed:Array<Article>;

    private articleService:ArticleService;

    public message:string;

    public type:string;

    protected socket;

    constructor(articleService:ArticleService)
    {
        this.article = new Article();
        this.articleService = articleService;

        this.socket = io('http://localhost:1337');
        this.socket.on('article_shared', function () {
            this.load();
        }.bind(this));
    }

    ngOnInit()
    {
        this.article.id = null;
        this.article.url = '';

        this.load();
    }

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

    public load()
    {
        this.articleService.getFeed()
            .subscribe(
                res => this.feed = res,
                err => console.log(err)
            );
    }
}