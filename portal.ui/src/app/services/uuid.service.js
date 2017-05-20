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
var UuidService = (function () {
    function UuidService(http, globalSharedService) {
        this.http = http;
        this.globalSharedService = globalSharedService;
        this.multipleUUIDCount = '5';
        this.contextUrl = this.globalSharedService.contextUrl;
        this.baseUrl = this.contextUrl + '/generate';
        this.getUUIDTypeOneURL = this.baseUrl + '/uuid4';
        this.getUUIDWithoutDashesURL = this.baseUrl + '/uuid4/dash';
        this.getUuidVersionOneURL = this.baseUrl + '/uuid1';
        this.getUUIDVersionOneWithoutDashesURL = this.baseUrl + '/uuid1/dash';
        this.getMultipleUUIDURL = this.baseUrl + '/uuid4/';
        this.getMultipleUUIDWithoutDashesURL = this.baseUrl + '/uuid4/dash/';
        this.getMultipleUUIDVersionOneURL = this.baseUrl + '/uuid1/';
        this.getMultipleUUIDVersionOneWithoutDashesURL = this.baseUrl + '/uuid1/dash/';
    }
    UuidService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UuidService.prototype.getUUIDTypeOne = function () {
        var _this = this;
        console.log("getUUIDTypeOne method in service called");
        return this.http
            .get(this.getUUIDTypeOneURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getUUIDWithoutDashes = function () {
        var _this = this;
        console.log("getUUIDWithoutDashes method in service called");
        return this.http
            .get(this.getUUIDWithoutDashesURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getUuidVersionOne = function () {
        var _this = this;
        console.log("getUuidVersionOne method in service called");
        return this.http
            .get(this.getUuidVersionOneURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getUUIDVersionOneWithoutDashes = function () {
        var _this = this;
        console.log("getUuidVersionOne without dashes method in service called");
        return this.http
            .get(this.getUUIDVersionOneWithoutDashesURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getMulitpleUUIDs = function (count) {
        var _this = this;
        return this.http
            .get(this.getMultipleUUIDURL + count, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getMultipleUUIDsWithoutDashes = function (count) {
        var _this = this;
        return this.http
            .get(this.getMultipleUUIDWithoutDashesURL + count, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getMultipleUUIDsVersionOne = function (count) {
        var _this = this;
        return this.http
            .get(this.getMultipleUUIDVersionOneURL + count, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService.prototype.getMultipleUUIDsVersionOneWithoutDashes = function (count) {
        var _this = this;
        return this.http
            .get(this.getMultipleUUIDVersionOneWithoutDashesURL + count, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UuidService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, global_shared_service_1.GlobalSharedService])
    ], UuidService);
    return UuidService;
}());
exports.UuidService = UuidService;
//# sourceMappingURL=uuid.service.js.map