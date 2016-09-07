import {Component} from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {ArticleService} from '../services/article.service';

@Component({
    selector: 'user-nav',
    providers: [UserService],
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
     * @property userService
     * @type {UserService}
     * @access protected
     */
    protected userService:UserService;

    /**
     * @param {UserService} userService
     */
    constructor(userService:UserService)
    {
        this.user = new User();
        this.userService = userService;
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

    }
}