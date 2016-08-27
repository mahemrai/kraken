"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
require('rxjs/add/operator/map');
const alert_1 = require('@ng-bootstrap/ng-bootstrap/alert/alert');
const article_1 = require('../models/article');
const article_service_1 = require('../services/article.service');
let FeedScreenComponent = class FeedScreenComponent {
    constructor(articleService) {
        this.article = new article_1.Article();
        this.articleService = articleService;
    }
    ngOnInit() {
        this.article.id = null;
        this.article.url = '';
        this.load();
    }
    onSubmit() {
        this.articleService.shareArticle(this.article)
            .subscribe(res => {
            this.type = 'success';
            this.message = 'Thank you for sharing!!';
            this.article.url = '';
            this.load();
        }, function (err) {
            this.type = 'error';
            this.message = 'Could not share the article. Try again.';
        });
    }
    load() {
        this.articleService.getFeed()
            .subscribe(res => this.feed = res, err => console.log(err));
    }
};
FeedScreenComponent = __decorate([
    core_1.Component({
        selector: 'feed-screen',
        directives: [alert_1.NgbAlert],
        providers: [article_service_1.ArticleService],
        templateUrl: 'app/dash/feed-screen.component.html'
    }), 
    __metadata('design:paramtypes', [article_service_1.ArticleService])
], FeedScreenComponent);
exports.FeedScreenComponent = FeedScreenComponent;
//# sourceMappingURL=feed-screen.component.js.map