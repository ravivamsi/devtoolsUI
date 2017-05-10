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
var dictionary_service_1 = require('./../services/dictionary.service');
var DictionaryComponent = (function () {
    function DictionaryComponent(dictionaryService) {
        this.dictionaryService = dictionaryService;
    }
    DictionaryComponent.prototype.getMeaning = function () {
        var _this = this;
        console.log("GetMeaning method is called");
        this.dictionaryService.getMeaning(this.word).subscribe(function (data) {
            console.log(data);
            _this.meaning = data.definition;
            _this.example = data.example;
        }, function (error) {
            console.log('Exception');
        });
    };
    DictionaryComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/dictionary.html',
            selector: 'dictionary'
        }), 
        __metadata('design:paramtypes', [dictionary_service_1.DictionaryService])
    ], DictionaryComponent);
    return DictionaryComponent;
}());
exports.DictionaryComponent = DictionaryComponent;
//# sourceMappingURL=dictionary.component.js.map