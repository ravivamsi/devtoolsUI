import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DictionaryService {
 
    private contextUrl : string = this.globalSharedService.contextUrl;
    private meaningURL : string = this.contextUrl + '/dictionary/';
    
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getMeaning(word : string){
        console.log("getMeaning method in service called " + word);        
        return this.http
            .get(this.meaningURL+word,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
}
