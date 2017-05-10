import { Routes, RouterModule } from '@angular/router';

import { GenerateUuidComponent } from './components/generate-uuid.component';
import { HomeComponent } from './components/home.component';
import { BankValidatorComponent } from './components/bank-validator.component';
import { CheckerComponent } from './components/checker.component';
import { ConvertersComponent } from './components/converters.component';
import { DateToolsComponent } from './components/date-tools.component';
import { DictionaryComponent } from './components/dictionary.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'uuid', component: GenerateUuidComponent },
    { path: 'bankUtils', component: BankValidatorComponent },
    { path: 'checker', component: CheckerComponent },
    { path: 'converters', component: ConvertersComponent},
    { path: 'dateTools', component: DateToolsComponent},
    { path: 'dictionary', component: DictionaryComponent }
];

export const routing = RouterModule.forRoot(appRoutes);