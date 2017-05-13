import { Routes, RouterModule } from '@angular/router';

import { GenerateUuidComponent } from './components/generate-uuid.component';
import { HomeComponent } from './components/home.component';
import { BankValidatorComponent } from './components/bank-validator.component';
import { CheckerComponent } from './components/checker.component';
import { ConvertersComponent } from './components/converters.component';
import { DateToolsComponent } from './components/date-tools.component';
import { DictionaryComponent } from './components/dictionary.component';
import { FileDiffComponent } from './components/fileDiff.component';
import { FileFormatComponent } from './components/fileformat.component';
import { AbbrevationComonent } from './components/abbrevation.component';
import { CountryComponent } from './components/country.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'uuid', component: GenerateUuidComponent },
    { path: 'checker', component: CheckerComponent },
    { path: 'converters', component: ConvertersComponent},
    { path: 'dateTools', component: DateToolsComponent},
    { path: 'dictionary', component: DictionaryComponent }
    { path: 'bankUtils', component: BankValidatorComponent },
    { path: 'fileformat', component: FileFormatComponent },
    { path: 'filediff', component: FileDiffComponent},
    { path: 'abbrevations', component: AbbrevationComonent },
    { path: 'country', component: CountryComponent }
];

export const routing = RouterModule.forRoot(appRoutes);