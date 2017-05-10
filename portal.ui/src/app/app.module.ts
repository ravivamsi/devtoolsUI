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
import { CheckerComponent } from './components/checker.component';
import { ConvertersComponent } from './components/converters.component';
import { DateToolsComponent } from './components/date-tools.component';
import { DictionaryComponent } from './components/dictionary.component';
import { routing }        from './app.routing';


// Services
import { UuidService } from './services/uuid.service';
import { GlobalSharedService } from './services/global-shared.service';
import { CheckerService } from './services/checker.service';
import { ConvertersService } from './services/converters.service';
import { DateToolsService } from './services/date-tools.service';
import { DictionaryService } from './services/dictionary.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,HomeComponent, GenerateUuidComponent, BankValidatorComponent, CheckerComponent, 
        ConvertersComponent, DateToolsComponent, DictionaryComponent
    ],
    providers: [       
        BaseRequestOptions, UuidService, GlobalSharedService, CheckerService, ConvertersService,
        DateToolsService, DictionaryService
    ],
    bootstrap: [AppComponent],
    directives: [ROUTER_DIRECTIVES]
})

export class AppModule { }