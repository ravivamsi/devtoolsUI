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
var uuid_service_1 = require('./../services/uuid.service');
var GenerateUuidComponent = (function () {
    function GenerateUuidComponent(uuidService) {
        this.uuidService = uuidService;
        this.uuidCount = 1;
    }
    GenerateUuidComponent.prototype.getUUID = function () {
        var _this = this;
        console.log(this.uuidType + "  --  " + this.uuidCount);
        if (this.uuidCount == null)
            this.uuidCount = 1;
        if (this.uuidType == "typeOne") {
            this.uuidService.getMulitpleUUIDs(this.uuidCount).subscribe(function (data) {
                console.log(data);
                _this.uuids = data.uuid;
            }, function (error) {
                console.log('Exception');
            });
        }
        else if (this.uuidType == "typeOneWithoutDashes") {
            this.uuidService.getMultipleUUIDsWithoutDashes(this.uuidCount).subscribe(function (data) {
                console.log(data);
                _this.uuids = data.uuid;
            }, function (error) {
                console.log('Exception');
            });
        }
        else if (this.uuidType == "versionOne") {
            this.uuidService.getMultipleUUIDsVersionOne(this.uuidCount).subscribe(function (data) {
                console.log(data);
                _this.uuids = data.uuid;
            }, function (error) {
                console.log('Exception');
            });
        }
        else if (this.uuidType == "versionOneWithoutDashes") {
            this.uuidService.getMultipleUUIDsVersionOneWithoutDashes(this.uuidCount).subscribe(function (data) {
                console.log(data);
                _this.uuids = data.uuid;
            }, function (error) {
                console.log('Exception');
            });
        }
    };
    GenerateUuidComponent.prototype.getUUIDOne = function () {
        var _this = this;
        console.log("uuidOne method called");
        this.uuidService.getUUIDTypeOne().subscribe(function (data) {
            _this.uuidOne = data;
        }, function (error) {
            console.log('Exception');
        });
    };
    GenerateUuidComponent.prototype.getUUIDWithoutDashes = function () {
        var _this = this;
        console.log("uuid without Dashes");
        this.uuidService.getUUIDWithoutDashes().subscribe(function (data) {
            _this.uuidWithoutDashes = data.uuid;
        }, function (error) {
            console.log('Exception');
        });
    };
    GenerateUuidComponent.prototype.getUUIDVersionOne = function () {
        var _this = this;
        console.log("uuid Version One");
        this.uuidService.getUuidVersionOne().subscribe(function (data) {
            _this.uuidVersionOne = data;
        }, function (error) {
            console.log('Exception');
        });
    };
    GenerateUuidComponent.prototype.getUUIDVersionOneWithoutDashes = function () {
        var _this = this;
        console.log("uuid Version One Without Dashes");
        this.uuidService.getUUIDVersionOneWithoutDashes().subscribe(function (data) {
            _this.uuidVersionOneWithoutDashes = data.uuid;
        }, function (error) {
            console.log('Exception');
        });
    };
    GenerateUuidComponent.prototype.generateMultipleUUID = function () {
        console.log("Generate Multiple UUID");
        this.uuidService.getMulitpleUUIDs().subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    GenerateUuidComponent.prototype.generateMultipleUUIDWithoutDashes = function () {
        console.log("Generate Multiple UUID");
        this.uuidService.getMultipleUUIDsWithoutDashes().subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log('Exception');
        });
    };
    GenerateUuidComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/generateUuid.html',
            selector: 'uuid'
        }), 
        __metadata('design:paramtypes', [uuid_service_1.UuidService])
    ], GenerateUuidComponent);
    return GenerateUuidComponent;
}());
exports.GenerateUuidComponent = GenerateUuidComponent;
//# sourceMappingURL=generate-uuid.component.js.map