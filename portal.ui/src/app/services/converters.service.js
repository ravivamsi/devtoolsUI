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
var ConvertersService = (function () {
    function ConvertersService(http, globalSharedService) {
        this.http = http;
        this.globalSharedService = globalSharedService;
        this.contextUrl = this.globalSharedService.contextUrl;
        this.areaUrl = this.contextUrl + '/area/';
        this.getCircleAreaURL = '/circle';
        this.getSquareAreaURL = '/square';
        this.getRectangleAreaURL = '/rectangle/';
        this.getTriangleAreaURL = 'triangle/base/';
        this.getTriangleAreaHeightURL = '/height/';
        this.triangleFirstURL = '/triangle/first/';
        this.triangleSecondURL = '/second/';
        this.triangleThirdURL = '/third/';
    }
    ConvertersService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ConvertersService.prototype.getAreaCircle = function (circleArea) {
        var _this = this;
        console.log("getAreaCircle method in service called");
        return this.http
            .get(this.areaUrl + circleArea + this.getCircleAreaURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    ConvertersService.prototype.getAreaSquare = function (squareArea) {
        var _this = this;
        console.log("getAreaSquare method in service called");
        return this.http
            .get(this.areaUrl + squareArea + this.getSquareAreaURL, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    ConvertersService.prototype.getAreaRectangle = function (width, height) {
        var _this = this;
        console.log("getAreaRectangle method in service called");
        return this.http
            .get(this.areaUrl + height + this.getRectangleAreaURL + width, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    ConvertersService.prototype.getAreaTriangle = function (base, height) {
        var _this = this;
        console.log("getAreaTriangle method in service called");
        return this.http
            .get(this.areaUrl + this.getTriangleAreaURL + base + this.getTriangleAreaHeightURL + height, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    ConvertersService.prototype.getAreaTriangleFromThreeSides = function (sideOne, sideTwo, sideThree) {
        var _this = this;
        console.log("getAreaTriangleFromThreeSides method in service called");
        return this.http
            .get(this.areaUrl + this.triangleFirstURL + sideOne + this.triangleSecondURL + sideTwo + this.triangleThirdURL + sideThree, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    ConvertersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, global_shared_service_1.GlobalSharedService])
    ], ConvertersService);
    return ConvertersService;
    var _a;
}());
exports.ConvertersService = ConvertersService;
//# sourceMappingURL=converters.service.js.map