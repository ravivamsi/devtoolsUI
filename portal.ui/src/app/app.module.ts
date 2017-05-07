import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ROUTER_DIRECTIVES, RouterModule} from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './components/app.component';
import { HomeComponent } from './components/home.component';
import { GenerateUuidComponent } from './components/generate-uuid.component';
import { BankValidatorComponent } from './components/bank-validator.component';
import { FileDiffComponent } from './components/fileDiff.component';
import { FileDiffComponent } from './components/fileDiff.component';
import { FileInput } from './components/common/FileInput';
import { routing }        from './app.routing';


// Services
import { UuidService } from './services/uuid.service';
import { GlobalSharedService } from './services/global-shared.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,HomeComponent, GenerateUuidComponent, BankValidatorComponent, FileDiffComponent,FileInput
    ],
    providers: [
        BaseRequestOptions, UuidService, GlobalSharedService
    ],
    bootstrap: [AppComponent],
    directives: [ROUTER_DIRECTIVES]
})

export class AppModule { }
