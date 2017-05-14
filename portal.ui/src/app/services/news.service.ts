import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NewsService {

    private contextUrl : string = this.globalSharedService.contextUrl;
    private baseUrl : string = this.contextUrl + '/news';

    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

	  getSourcesByCountry(countryCode) {
        return this.http
            .get(this.baseUrl + '/sources/country/' + countryCode,'',{ headers: this.globalSharedService.getJWTHeader() })
            .map(response => response.json())
            .catch(err => this.handleError(err));
    }

    getNewsArticlesBySourceAndSortBy(sourceId, sortBy) {
        return this.http
            .get(this.baseUrl + '/articles/' + sourceId +  '/' + sortBy,'',{ headers: this.globalSharedService.getJWTHeader() })
            .map(response => response.json())
            .catch(err => this.handleError(err));
    }
}
