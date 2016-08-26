import {Component} from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from '../models/user';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'register-form',
    providers: [AuthService],
    templateUrl: 'app/register/register.component.html'
})

export class RegisterComponent {
    private user:User;

    private authService:AuthService;

    constructor(authService:AuthService) {
        this.authService = authService;
    }

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