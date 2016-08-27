import {Component} from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
    selector: 'user-nav',
    providers: [UserService],
    templateUrl: 'app/dash/user-nav.component.html'
})

export class UserNavComponent {
    public user:User = new User();
    public name:String;

    protected userService:UserService;

    constructor(userService:UserService)
    {
        this.userService = userService;
    }

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

    protected setUser(res)
    {
        this.user.firstname = res[0].firstname;
        this.user.lastname = res[0].lastname;
    }
}