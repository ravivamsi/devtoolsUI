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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var global_shared_service_1 = require('./../services/global-shared.service');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var DateToolsService = (function () {
    function DateToolsService(http, globalSharedService) {
        this.http = http;
        this.globalSharedService = globalSharedService;
        this.contextUrl = this.globalSharedService.contextUrl;
        this.defaultDateURL = this.contextUrl + '/generate/date';
    }
    DateToolsService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DateToolsService.prototype.getDefaultDate = function () {
        var _this = this;
        console.log("getDefaultDate method in service called");
        return this.http
            .get(this.defaultDateURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    DateToolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, global_shared_service_1.GlobalSharedService])
    ], DateToolsService);
    return DateToolsService;
    var _a;
}());
exports.DateToolsService = DateToolsService;
//# sourceMappingURL=date-tools.service.js.map