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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// used to create fake backend
var http_2 = require('@angular/http');
var app_component_1 = require('./components/app.component');
var home_component_1 = require('./components/home.component');
var generate_uuid_component_1 = require('./components/generate-uuid.component');
var bank_validator_component_1 = require('./components/bank-validator.component');
var checker_component_1 = require('./components/checker.component');
var converters_component_1 = require('./components/converters.component');
var date_tools_component_1 = require('./components/date-tools.component');
var dictionary_component_1 = require('./components/dictionary.component');
var app_routing_1 = require('./app.routing');
// Services
var uuid_service_1 = require('./services/uuid.service');
var global_shared_service_1 = require('./services/global-shared.service');
var checker_service_1 = require('./services/checker.service');
var converters_service_1 = require('./services/converters.service');
var date_tools_service_1 = require('./services/date-tools.service');
var dictionary_service_1 = require('./services/dictionary.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent, home_component_1.HomeComponent, generate_uuid_component_1.GenerateUuidComponent, bank_validator_component_1.BankValidatorComponent, checker_component_1.CheckerComponent,
                converters_component_1.ConvertersComponent, date_tools_component_1.DateToolsComponent, dictionary_component_1.DictionaryComponent
            ],
            providers: [
                http_2.BaseRequestOptions, uuid_service_1.UuidService, global_shared_service_1.GlobalSharedService, checker_service_1.CheckerService, converters_service_1.ConvertersService,
                date_tools_service_1.DateToolsService, dictionary_service_1.DictionaryService
            ],
            bootstrap: [app_component_1.AppComponent],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map