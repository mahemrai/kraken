import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap/alert/alert';

import {User} from '../models/user';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'login-form',
    directives: [
        NgbAlert
    ],
    providers: [AuthService],
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
    private user:User;

    public error:String;

    public type:String;

    private authService:AuthService;

    constructor(authService:AuthService) {
        this.authService = authService;
    }

    ngOnInit() {
        this.user = new User();
        this.user.setEmail('');
        this.user.setPassword('');

        this.authService.loggedIn()
            .subscribe(
                function (res) {
                    window.location.href = '/dashboard';
                },
                function (err) {
                    localStorage.removeItem('token');
                }
            );
    }

    public onSubmit() {
        this.authService.authenticate(this.user)
            .subscribe(
                res => this.authService.completeAuthentication(),
                function (err) {
                    this.error = JSON.parse(err._body).error;
                    this.type = 'danger';
                }
            );
    }
}