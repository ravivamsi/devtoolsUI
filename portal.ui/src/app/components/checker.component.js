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
var checker_service_1 = require('./../services/checker.service');
var CheckerComponent = (function () {
    function CheckerComponent(checkerService) {
        this.checkerService = checkerService;
        this.ignoreCase = true;
    }
    CheckerComponent.prototype.checkArmstrong = function () {
        console.log("checkAmstrong method called");
        this.checkerService.checkAmstrong(this.amstrongNumber).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    CheckerComponent.prototype.checkEvenOdd = function () {
        console.log("evenOdd method called");
        this.checkerService.checkEvenOdd(this.evenAndOdd).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    CheckerComponent.prototype.checkLeapYear = function () {
        console.log("leapYear method called");
        this.checkerService.checkLeapYear(this.leapYear).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    CheckerComponent.prototype.checkPrimeNumber = function () {
        console.log("checkPrimeNumber method called");
        this.checkerService.checkPrimeNumber(this.primeNumber).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    CheckerComponent.prototype.checkPalindrome = function () {
        console.log("checkPalindrome method called");
        if (this.ignoreCase == true) {
            this.checkerService.checkPalindromeIgnoreCase(this.palindrome).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('Exception');
            });
        }
        else {
            this.checkerService.checkPalindrome(this.palindrome).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('Exception');
            });
        }
    };
    CheckerComponent.prototype.getDivision = function () {
        console.log("checkPalindrome method called " + this.divisor);
        if (this.divisor == 'divisor') {
            this.checkerService.getDivisor(this.divisor1, this.divisor2).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('Exception');
            });
        }
        else if (this.divisor == 'reminder') {
            this.checkerService.getReminder(this.divisor1, this.divisor2).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('Exception');
            });
        }
        else {
            this.checkerService.getQuotient(this.divisor1, this.divisor2).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('Exception');
            });
        }
    };
    CheckerComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/checker.html',
            selector: 'checker'
        }), 
        __metadata('design:paramtypes', [checker_service_1.CheckerService])
    ], CheckerComponent);
    return CheckerComponent;
}());
exports.CheckerComponent = CheckerComponent;
//# sourceMappingURL=checker.component.js.map