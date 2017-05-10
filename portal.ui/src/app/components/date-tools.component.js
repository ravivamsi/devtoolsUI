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
var date_tools_service_1 = require('./../services/date-tools.service');
var DateToolsComponent = (function () {
    function DateToolsComponent(dateToolsService) {
        this.dateToolsService = dateToolsService;
    }
    DateToolsComponent.prototype.getDefaultDate = function () {
        var _this = this;
        console.log("getDefaultDate method called");
        this.dateToolsService.getDefaultDate().subscribe(function (data) {
            _this.defaultDate = data;
        }, function (error) {
            console.log('Exception');
        });
    };
    DateToolsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/dateTools.html',
            selector: 'dateTools'
        }), 
        __metadata('design:paramtypes', [date_tools_service_1.DateToolsService])
    ], DateToolsComponent);
    return DateToolsComponent;
}());
exports.DateToolsComponent = DateToolsComponent;
//# sourceMappingURL=date-tools.component.js.map