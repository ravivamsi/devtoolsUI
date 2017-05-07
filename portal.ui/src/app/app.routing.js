"use strict";
var router_1 = require('@angular/router');
var generate_uuid_component_1 = require('./components/generate-uuid.component');
var home_component_1 = require('./components/home.component');
var bank_validator_component_1 = require('./components/bank-validator.component');
var fileDiff_component_1 = require('./components/fileDiff.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'uuid', component: generate_uuid_component_1.GenerateUuidComponent },
    { path: 'bankUtils', component: bank_validator_component_1.BankValidatorComponent },
    { path: 'filediff', component: fileDiff_component_1.FileDiffComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map