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

/**
 * @class LoginComponent
 */
export class LoginComponent {
    /**
     * @property user
     * @type {User}
     */
    private user:User;

    /**
     * @property error
     * @type {String}
     */
    public error:string;

    /**
     * @property type
     * @type {String}
     */
    public type:string;

    /**
     * @property authService
     * @type {AuthService}
     */
    private authService:AuthService;

    /**
     * @param {AuthService} authService
     */
    constructor(authService:AuthService) {
        this.authService = authService;
    }

    /**
     * Initialise user object and check if the user is already logged in.
     */
    ngOnInit() {
        this.user = new User();
        this.user.email = '';
        this.user.password = '';

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

    /**
     * Handle form submission by logging user in.
     */
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