import { Routes, RouterModule } from '@angular/router';

import { GenerateUuidComponent } from './components/generate-uuid.component';
import { HomeComponent } from './components/home.component';
import { BankValidatorComponent } from './components/bank-validator.component';
import { FileDiffComponent } from './components/fileDiff.component';
import { FileFormatComponent } from './components/fileformat.component';
import { TimerComponent } from './components/timer.component';
import { NewsComponent } from './components/news.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'uuid', component: GenerateUuidComponent },
    { path: 'bankUtils', component: BankValidatorComponent },
    { path: 'fileformat', component: FileFormatComponent },
    { path: 'filediff', component: FileDiffComponent },
    { path: 'timer', component: TimerComponent },
    { path: 'news', component: NewsComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
