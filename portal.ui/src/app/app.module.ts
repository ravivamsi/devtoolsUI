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
import { FileDiffComponent } from './components/fileDiff.component';
import { FileFormatComponent } from './components/fileformat.component';
import { AbbrevationComonent } from './components/abbrevation.component';
import { CountryComponent } from './components/country.component';
import { TimerComponent } from './components/timer.component';
import { FileInput } from './components/common/FileInput';
import { Clock } from './components/common/Clock';
import { routing }        from './app.routing';


// Services
import { UuidService } from './services/uuid.service';
import { GlobalSharedService } from './services/global-shared.service';
import { CheckerService } from './services/checker.service';
import { ConvertersService } from './services/converters.service';
import { DateToolsService } from './services/date-tools.service';
import { DictionaryService } from './services/dictionary.service';
import { AbbrevationService } from './services/abbrevation.service';
import { CountryService } from './services/country.service';
import {
    MultiSelectModule,
    TooltipModule,
    RadioButtonModule,
    GrowlModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    PanelModule,
    InputMaskModule,
    PasswordModule,
    CheckboxModule,
    MessagesModule,
    MenubarModule,
    EditorModule,
    RatingModule,
    AutoCompleteModule,
    TabViewModule,
    DragDropModule,    
    ConfirmDialogModule,
    ConfirmationService,
    ChartModule,
    FileUploadModule,
    GalleriaModule,
    OrderListModule,
    ProgressBarModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MultiSelectModule,
        TooltipModule,
        RadioButtonModule,
        GrowlModule,
        CalendarModule,
        InputTextModule,
        InputTextareaModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        DropdownModule,
        PanelModule,
        InputMaskModule,
        PasswordModule,
        CheckboxModule,
        MessagesModule,
        MenubarModule,
        EditorModule,
        RatingModule,
        AutoCompleteModule,
        TabViewModule,
        DragDropModule,    
        ConfirmDialogModule,
        ChartModule,
        FileUploadModule,
        GalleriaModule,
        OrderListModule,
        ProgressBarModule,
        routing
    ],
    declarations: [
        CheckerComponent, 
        ConvertersComponent, DateToolsComponent, DictionaryComponent,
        AppComponent,
        HomeComponent,
        GenerateUuidComponent,
        BankValidatorComponent,
        FileDiffComponent,
        FileFormatComponent,
        AbbrevationComonent,
        CountryComponent,
        TimerComponent,
        FileInput,
        Clock
      
    ],
    providers: [       
        BaseRequestOptions, UuidService, GlobalSharedService, CheckerService, ConvertersService,
        DateToolsService, DictionaryService, AbbrevationService, CountryService
    ],
    bootstrap: [AppComponent],
    directives: [ROUTER_DIRECTIVES]
})

export class AppModule { }