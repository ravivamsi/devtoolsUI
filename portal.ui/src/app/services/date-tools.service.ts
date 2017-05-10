import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DateToolsService {
    
    private contextUrl : string = this.globalSharedService.contextUrl;
    private defaultDateURL : string = this.contextUrl + '/generate/date';
    
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getDefaultDate(){
        console.log("getDefaultDate method in service called");
        return this.http
            .get(this.defaultDateURL,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
}
