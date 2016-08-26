import {Component} from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from '../models/user';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'register-form',
    providers: [AuthService],
    templateUrl: 'app/register/register.component.html'
})

/**
 * @class RegisterComponent
 */
export class RegisterComponent {
    /**
     * @property user
     * @type {User}
     */
    private user:User;

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
        this.user.setFirstname('');
        this.user.setLastname('');
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

    /**
     * Handle form submission by starting the registration process.
     */
    public onSubmit() {
        this.authService.register(this.user)
            .subscribe(
                res => this.authService.authenticate(this.user)
                           .subscribe(
                               res => this.authService.completeAuthentication(),
                               function (err) {
                                   console.log(err);
                               }
                           ),
                err => console.log(err)
            );
    }
}