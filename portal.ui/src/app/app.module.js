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
var fileDiff_component_1 = require('./components/fileDiff.component');
var fileformat_component_1 = require('./components/fileformat.component');
var abbrevation_component_1 = require('./components/abbrevation.component');
var country_component_1 = require('./components/country.component');
var timer_component_1 = require('./components/timer.component');
var FileInput_1 = require('./components/common/FileInput');
var Clock_1 = require('./components/common/Clock');
var app_routing_1 = require('./app.routing');
// Services
var uuid_service_1 = require('./services/uuid.service');
var global_shared_service_1 = require('./services/global-shared.service');
var checker_service_1 = require('./services/checker.service');
var converters_service_1 = require('./services/converters.service');
var date_tools_service_1 = require('./services/date-tools.service');
var dictionary_service_1 = require('./services/dictionary.service');
var abbrevation_service_1 = require('./services/abbrevation.service');
var country_service_1 = require('./services/country.service');
var primeng_1 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_1.MultiSelectModule,
                primeng_1.TooltipModule,
                primeng_1.RadioButtonModule,
                primeng_1.GrowlModule,
                primeng_1.CalendarModule,
                primeng_1.InputTextModule,
                primeng_1.InputTextareaModule,
                primeng_1.DataTableModule,
                primeng_1.ButtonModule,
                primeng_1.DialogModule,
                primeng_1.DropdownModule,
                primeng_1.PanelModule,
                primeng_1.InputMaskModule,
                primeng_1.PasswordModule,
                primeng_1.CheckboxModule,
                primeng_1.MessagesModule,
                primeng_1.MenubarModule,
                primeng_1.EditorModule,
                primeng_1.RatingModule,
                primeng_1.AutoCompleteModule,
                primeng_1.TabViewModule,
                primeng_1.DragDropModule,
                primeng_1.ConfirmDialogModule,
                primeng_1.ChartModule,
                primeng_1.FileUploadModule,
                primeng_1.GalleriaModule,
                primeng_1.OrderListModule,
                primeng_1.ProgressBarModule,
                app_routing_1.routing
            ],
            declarations: [
                checker_component_1.CheckerComponent,
                converters_component_1.ConvertersComponent, date_tools_component_1.DateToolsComponent, dictionary_component_1.DictionaryComponent,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                generate_uuid_component_1.GenerateUuidComponent,
                bank_validator_component_1.BankValidatorComponent,
                fileDiff_component_1.FileDiffComponent,
                fileformat_component_1.FileFormatComponent,
                abbrevation_component_1.AbbrevationComonent,
                country_component_1.CountryComponent,
                timer_component_1.TimerComponent,
                FileInput_1.FileInput,
                Clock_1.Clock
            ],
            providers: [
                http_2.BaseRequestOptions, uuid_service_1.UuidService, global_shared_service_1.GlobalSharedService, checker_service_1.CheckerService, converters_service_1.ConvertersService,
                date_tools_service_1.DateToolsService, dictionary_service_1.DictionaryService, abbrevation_service_1.AbbrevationService, country_service_1.CountryService
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