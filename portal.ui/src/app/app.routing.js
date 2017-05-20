"use strict";
var router_1 = require('@angular/router');
var generate_uuid_component_1 = require('./components/generate-uuid.component');
var home_component_1 = require('./components/home.component');
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
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'uuid', component: generate_uuid_component_1.GenerateUuidComponent },
    { path: 'checker', component: checker_component_1.CheckerComponent },
    { path: 'converters', component: converters_component_1.ConvertersComponent },
    { path: 'dateTools', component: date_tools_component_1.DateToolsComponent },
    { path: 'dictionary', component: dictionary_component_1.DictionaryComponent },
    { path: 'bankUtils', component: bank_validator_component_1.BankValidatorComponent },
    { path: 'fileformat', component: fileformat_component_1.FileFormatComponent },
    { path: 'filediff', component: fileDiff_component_1.FileDiffComponent },
    { path: 'abbrevations', component: abbrevation_component_1.AbbrevationComonent },
    { path: 'country', component: country_component_1.CountryComponent },
    { path: 'filediff', component: fileDiff_component_1.FileDiffComponent },
    { path: 'timer', component: timer_component_1.TimerComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map