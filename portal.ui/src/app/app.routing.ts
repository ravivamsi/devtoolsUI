import { Routes, RouterModule } from '@angular/router';

import { GenerateUuidComponent } from './components/generate-uuid.component';
import { HomeComponent } from './components/home.component';
import { BankValidatorComponent } from './components/bank-validator.component';
import { FileDiffComponent } from './components/fileDiff.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'uuid', component: GenerateUuidComponent },
    { path: 'bankUtils', component: BankValidatorComponent },
    { path: 'filediff', component: FileDiffComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
