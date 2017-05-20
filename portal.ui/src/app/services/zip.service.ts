import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ZipService {

    private contextUrl : string = this.globalSharedService.contextUrl;
    private baseUrl : string = this.contextUrl + '/zip';

    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

	  getCountriesList() {
        return this.http
            .get(this.baseUrl + '/countries/list','',{ headers: this.globalSharedService.getJWTHeader() })
            .map(response => response.json())
            .catch(err => this.handleError(err));
    }

    getZipDetails(countryCode, zip) {
        return this.http
            .get(this.baseUrl + '/' + countryCode +  '/' + zip,'',{ headers: this.globalSharedService.getJWTHeader() })
            .map(response => response.json())
            .catch(err => this.handleError(err));
    }
}
