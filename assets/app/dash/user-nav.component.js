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
const user_service_1 = require('../services/user.service');
let UserNavComponent = class UserNavComponent {
    constructor(userService) {
        this.user = new user_1.User();
        this.userService = userService;
    }
    ngAfterViewInit() {
        this.userService.getUserInfo().subscribe(res => {
            this.user.firstname = res[0].firstname;
            this.user.lastname = res[0].lastname;
            this.user.profilePic = res[0].profilePic;
        }, err => console.log(err));
    }
    setUser(res) {
        this.user.firstname = res[0].firstname;
        this.user.lastname = res[0].lastname;
    }
};
UserNavComponent = __decorate([
    core_1.Component({
        selector: 'user-nav',
        providers: [user_service_1.UserService],
        templateUrl: 'app/dash/user-nav.component.html'
    }), 
    __metadata('design:paramtypes', [user_service_1.UserService])
], UserNavComponent);
exports.UserNavComponent = UserNavComponent;
//# sourceMappingURL=user-nav.component.js.map