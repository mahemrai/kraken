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
const http_1 = require('@angular/http');
/**
 * @class AuthService
 */
let AuthService = class AuthService {
    /**
     * @param {Http} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Authenticate user with the provided credentials.
     * @param {User} user
     * @return Observable
     */
    authenticate(user) {
        return this.http.post('/auth/login', user)
            .map((res) => {
            return res.json();
        });
    }
    /**
     * Complete authentication process by retrieving JSON Web Token
     * for the user and storing it in the local storage.
     */
    completeAuthentication() {
        this.http.get('/user/jwt')
            .map((res) => res.json())
            .subscribe(function (data) {
            localStorage.setItem('token', JSON.stringify(data));
            window.location.href = '/dashboard';
        }, function (err) { console.log(err); });
    }
    /**
     * Register user with the provided details.
     * @param {User} user
     * @return Observable
     */
    register(user) {
        return this.http.post('/user/register', user)
            .map((res) => {
            return res.json();
        });
    }
    /**
     * Check if the user is already logged in.
     * @return Observable
     */
    loggedIn() {
        return this.http.get('/user/jwt')
            .map((res) => {
            return res.json();
        });
    }
};
AuthService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map