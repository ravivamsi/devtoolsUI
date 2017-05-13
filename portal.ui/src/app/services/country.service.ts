import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class CountryService {   

    private contextUrl : string = this.globalSharedService.contextUrl;
    private getCountryURL : stirng = this.contextUrl + '/country/';
    
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getCountry(word : string, service : string){
        console.log("getCountry method in service called");
        return this.http
            .get(this.getCountryURL+word+'/'+service,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));   
    }
}
