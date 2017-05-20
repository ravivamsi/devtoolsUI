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
import { FileFormatComponent } from './components/fileformat.component';
import { TimerComponent } from './components/timer.component';
import { NewsComponent } from './components/news.component';
import { ZipComponent } from './components/zip.component';
import { ObjNgFor } from './components/zip.component';
import { FileInput } from './components/common/FileInput';
import { Clock } from './components/common/Clock';
import { routing }        from './app.routing';


// Services
import { UuidService } from './services/uuid.service';
import { GlobalSharedService } from './services/global-shared.service';
import { NewsService } from './services/news.service';
import { ZipService } from './services/zip.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        GenerateUuidComponent,
        BankValidatorComponent,
        FileDiffComponent,
        FileFormatComponent,
        TimerComponent,
        NewsComponent,
        ZipComponent,
        ObjNgFor,
        FileInput,
        Clock
    ],
    providers: [
        BaseRequestOptions, UuidService, GlobalSharedService, NewsService, ZipService
    ],
    bootstrap: [AppComponent],
    directives: [ROUTER_DIRECTIVES]
})

export class AppModule { }
