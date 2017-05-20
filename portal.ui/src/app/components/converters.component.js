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
var converters_service_1 = require('./../services/converters.service');
var ConvertersComponent = (function () {
    function ConvertersComponent(convertersService) {
        this.convertersService = convertersService;
    }
    ConvertersComponent.prototype.checkAreaCircle = function () {
        console.log("CheckAreaCircle method called");
        this.convertersService.getAreaCircle(this.areaCircle).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    ConvertersComponent.prototype.checkAreaSquare = function () {
        console.log("checkAreaSquare method called");
        this.convertersService.getAreaSquare(this.areaSquare).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    ConvertersComponent.prototype.checkAreaRectangle = function () {
        console.log("checkAreaSquare method called");
        this.convertersService.getAreaRectangle(this.rectangleWidth, this.rectangleHeight).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    ConvertersComponent.prototype.checkAreaTriangle = function () {
        console.log("checkAreaTriangle method called");
        this.convertersService.getAreaTriangle(this.triangleBase, this.triangleHeight).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    ConvertersComponent.prototype.checkAreaTriangleFromThreeSides = function () {
        console.log("checkAreaTriangleFromThreeSides method called");
        this.convertersService.getAreaTriangleFromThreeSides(this.triangleFirstSide, this.triangleSecondSide, this.triangleThirdSide).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    ConvertersComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/conveters.html',
            selector: 'conveters'
        }), 
        __metadata('design:paramtypes', [converters_service_1.ConvertersService])
    ], ConvertersComponent);
    return ConvertersComponent;
}());
exports.ConvertersComponent = ConvertersComponent;
//# sourceMappingURL=converters.component.js.map