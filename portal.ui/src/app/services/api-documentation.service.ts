import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ApiDocumentationService {
        
    private contextUrl : string = this.globalSharedService.contextUrl;
    
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getFiles() {
        return this.http.get('app/resources/data/api-documentation-data/country.json')
                    .map(response => response.json())
                    .catch(err => this.handleError(err));
            
                    //.toPromise()
                    //.then(res => <object[]> res.json().data);
    }
    
}
