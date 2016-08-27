import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap/alert/alert';

import {Article} from '../models/article';
import {ArticleService} from '../services/article.service';

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

    constructor(articleService:ArticleService)
    {
        this.article = new Article();
        this.articleService = articleService;
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
                    this.load();
                },
                function (err) {
                    this.type = 'error';
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