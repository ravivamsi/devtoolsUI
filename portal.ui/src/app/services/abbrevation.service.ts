import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class AbbrevationService {
        
    private contextUrl : string = this.globalSharedService.contextUrl;
    private popularURL : string = this.contextUrl + '/abbrevation/';
    private allAbbrevationsURL : string = this.contextUrl + '/abbrevations/';

    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    } 
    
    getPopularAbbrevations(word : string) {
        console.log("getPopularAbbrevations method in service called " + word);        
        return this.http
            .get(this.popularURL+word,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getAllAbbrevations(word : string) {
        console.log("getPopularAbbrevations method in service called " + word);        
        return this.http
            .get(this.allAbbrevationsURL+word,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
}