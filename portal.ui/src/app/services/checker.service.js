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
var CheckerService = (function () {
    function CheckerService(http, globalSharedService) {
        this.http = http;
        this.globalSharedService = globalSharedService;
        this.inputValue = "10";
        this.inputValueTwo = "5";
        this.contextUrl = this.globalSharedService.contextUrl;
        this.checkAmstrongURL = this.contextUrl + '/armstrong/';
        this.checkEvenOddURL = this.contextUrl + '/evenodd/';
        this.checkLeapYearURL = this.contextUrl + '/leapyear/';
        this.checkPrimeNumberURL = this.contextUrl + '/prime/';
        this.checkPalindromURL = this.contextUrl + '/palindrome/';
        this.checkPalindromIgnoreCaseURL = '/ignorecase';
        this.divisorOneURL = '/division/';
        this.divisorTwoURL = '/divisor/';
        this.reminderURL = '/reminder';
        this.quotientURL = '/quotient';
    }
    CheckerService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CheckerService.prototype.checkAmstrong = function (amstrongNumber) {
        var _this = this;
        console.log("checkAmstrong method in service called " + amstrongNumber);
        return this.http
            .get(this.checkAmstrongURL + amstrongNumber, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.checkEvenOdd = function (evenAndOdd) {
        var _this = this;
        return this.http
            .get(this.checkEvenOddURL + evenAndOdd, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.checkLeapYear = function (leapYear) {
        var _this = this;
        return this.http
            .get(this.checkLeapYearURL + leapYear, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.checkPrimeNumber = function (primeNumber) {
        var _this = this;
        return this.http
            .get(this.checkPrimeNumberURL + primeNumber, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.checkPalindrome = function (palindrome) {
        var _this = this;
        return this.http
            .get(this.checkPalindromURL + palindrome, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.checkPalindromeIgnoreCase = function (palindrome) {
        var _this = this;
        return this.http
            .get(this.checkPalindromURL + palindrome + this.checkPalindromIgnoreCaseURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.getDivisor = function (divisor1, divisor2) {
        var _this = this;
        return this.http
            .get(this.contextUrl + this.divisorOneURL + divisor1 + this.divisorTwoURL + divisor2, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.getReminder = function (divisor1, divisor2) {
        var _this = this;
        return this.http
            .get(this.contextUrl + this.divisorOneURL + divisor1 + this.divisorTwoURL + divisor2 + this.reminderURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService.prototype.getQuotient = function (divisor1, divisor2) {
        var _this = this;
        return this.http
            .get(this.contextUrl + this.divisorOneURL + divisor1 + this.divisorTwoURL + divisor2 + this.quotientURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    CheckerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, global_shared_service_1.GlobalSharedService])
    ], CheckerService);
    return CheckerService;
    var _a;
}());
exports.CheckerService = CheckerService;
//# sourceMappingURL=checker.service.js.map