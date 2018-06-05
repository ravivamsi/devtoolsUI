import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VinService {

    private contextUrl : string = this.globalSharedService.contextUrl;
    private baseUrl : string = this.contextUrl + '/vin';

    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getVinDetails(vin, year) {
        return this.http
            .get(this.baseUrl + '/' + vin +  '/year/' + year,'',{ headers: this.globalSharedService.getJWTHeader() })
            .map(response => response.json())
            .catch(err => this.handleError(err));
    }
}
