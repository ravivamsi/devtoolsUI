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
var DictionaryService = (function () {
    function DictionaryService(http, globalSharedService) {
        this.http = http;
        this.globalSharedService = globalSharedService;
        this.contextUrl = this.globalSharedService.contextUrl;
        this.meaningURL = this.contextUrl + '/dictionary/';
    }
    DictionaryService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DictionaryService.prototype.getMeaning = function (word) {
        var _this = this;
        console.log("getMeaning method in service called " + word);
        return this.http
            .get(this.meaningURL + word, '', { headers: this.globalSharedService.getJWTHeader() }).map(function (response) { return response.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    DictionaryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, global_shared_service_1.GlobalSharedService])
    ], DictionaryService);
    return DictionaryService;
    var _a;
}());
exports.DictionaryService = DictionaryService;
//# sourceMappingURL=dictionary.service.js.map