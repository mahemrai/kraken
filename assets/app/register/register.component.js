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
const user_1 = require('../models/user');
const auth_service_1 = require('../services/auth.service');
let RegisterComponent = class RegisterComponent {
    /**
     * @param {AuthService} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * Initialise user object and check if the user is already logged in.
     */
    ngOnInit() {
        this.user = new user_1.User();
        this.user.setFirstname('');
        this.user.setLastname('');
        this.user.setEmail('');
        this.user.setPassword('');
        this.authService.loggedIn()
            .subscribe(function (res) {
            window.location.href = '/dashboard';
        }, function (err) {
            localStorage.removeItem('token');
        });
    }
    /**
     * Handle form submission by starting the registration process.
     */
    onSubmit() {
        this.authService.register(this.user)
            .subscribe(res => this.authService.authenticate(this.user)
            .subscribe(res => this.authService.completeAuthentication(), function (err) {
            console.log(err);
        }), err => console.log(err));
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-form',
        providers: [auth_service_1.AuthService],
        templateUrl: 'app/register/register.component.html'
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map