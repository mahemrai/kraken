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
const user_1 = require('../models/user');
const auth_service_1 = require('../services/auth.service');
let LoginComponent = class LoginComponent {
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
        this.user.email = '';
        this.user.password = '';
        this.authService.loggedIn()
            .subscribe(function (res) {
            window.location.href = '/dashboard';
        }, function (err) {
            localStorage.removeItem('token');
        });
    }
    /**
     * Handle form submission by logging user in.
     */
    onSubmit() {
        this.authService.authenticate(this.user)
            .subscribe(res => this.authService.completeAuthentication(), function (err) {
            this.error = JSON.parse(err._body).error;
            this.type = 'danger';
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        directives: [
            alert_1.NgbAlert
        ],
        providers: [auth_service_1.AuthService],
        templateUrl: 'app/login/login.component.html'
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map