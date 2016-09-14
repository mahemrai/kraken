import {Component, Output, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from '../models/user';
import {Article} from '../models/article';
import {UserService} from '../services/user.service';
import {ArticleService} from '../services/article.service';

@Component({
    selector: 'user-nav',
    providers: [UserService, ArticleService],
    templateUrl: 'app/dash/user-nav.component.html'
})

/**
 * User navigation component
 * @class UserNavComponent
 */
export class UserNavComponent {
    /**
     * @property user
     * @type {User}
     * @access public
     */
    public user:User;

    /**
     * @property name
     * @type {String}
     * @access public
     */
    public name:String;

    /**
     * @property library
     * @type {Array<Article>}
     * @access public
     */
    public feed:Array<Article>;

    /**
     * @property userService
     * @type {UserService}
     * @access protected
     */
    protected userService:UserService;

    /**
     * @property articleService
     * @type {ArticleService}
     * @access protected
     */
    protected articleService:ArticleService;

    @Output()
    testEvent = new EventEmitter();

    /**
     * @param {UserService} userService
     * @param {ArticleService} articleService
     */
    constructor(userService:UserService, articleService:ArticleService)
    {
        this.user = new User();
        this.userService = userService;
        this.articleService = articleService;
    }

    /**
     * Display user information after the view is loaded.
     */
    ngAfterViewInit()
    {
        this.userService.getUserInfo().subscribe(
            res => { 
                this.user.firstname = res[0].firstname;
                this.user.lastname = res[0].lastname;
                this.user.profilePic = res[0].profilePic;
            },
            err => console.log(err)
        );
    }

    public loadLibrary()
    {
        /*this.articleService.getUserLibrary().subscribe(
            res => {
                console.log('Hello');
                this.testEvent.emit('Hello');
            },
            err => console.log(err)
        );*/
        this.testEvent.emit('Hello');
    }
}