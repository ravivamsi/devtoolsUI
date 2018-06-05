﻿import { Routes, RouterModule } from '@angular/router';

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
import { TimerComponent } from './components/timer.component';
import { NewsComponent } from './components/news.component';
import { ZipComponent } from './components/zip.component';
import { VinComponent } from './components/vin.component';
import { ApiDocumentationComponent } from './components/api-documentation.component';

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
    { path: 'filediff', component: FileDiffComponent },
    { path: 'timer', component: TimerComponent },
    { path: 'news', component: NewsComponent },
    { path: 'zip', component: ZipComponent },
    { path: 'vin', component: VinComponent },
    { path: 'apiDocument', component: ApiDocumentationComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
