import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class UuidService {
        
    private multipleUUIDCount: String = '5';

    private contextUrl : string = this.globalSharedService.contextUrl;
    private baseUrl : string = this.contextUrl + '/generate';
    private getUUIDTypeOneURL: string = this.baseUrl+'/uuid4';
    private getUUIDWithoutDashesURL: string = this.baseUrl+'/uuid4/dash';
    private getUuidVersionOneURL: string = this.baseUrl+'/uuid1';
    private getUUIDVersionOneWithoutDashesURL = this.baseUrl+'/uuid1/dash';
    private getMultipleUUIDURL = this.baseUrl+'/uuid4/';
    private getMultipleUUIDWithoutDashesURL = this.baseUrl+'/uuid4/dash/';
    private getMultipleUUIDVersionOneURL = this.baseUrl + '/uuid1/' ;
    private getMultipleUUIDVersionOneWithoutDashesURL = this.baseUrl + '/uuid1/dash/';
    
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

	getUUIDTypeOne() {
		console.log("getUUIDTypeOne method in service called");
        return this.http
            .get(this.getUUIDTypeOneURL,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    } 
    
    getUUIDWithoutDashes() {
        console.log("getUUIDWithoutDashes method in service called");
        return this.http
            .get(this.getUUIDWithoutDashesURL,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getUuidVersionOne(){
        console.log("getUuidVersionOne method in service called");
        return this.http
            .get(this.getUuidVersionOneURL,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getUUIDVersionOneWithoutDashes(){
        console.log("getUuidVersionOne without dashes method in service called");
        return this.http
            .get(this.getUUIDVersionOneWithoutDashesURL,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getMulitpleUUIDs(count : string){        
        return this.http
            .get(this.getMultipleUUIDURL + count,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getMultipleUUIDsWithoutDashes(count : string){
            return this.http
            .get(this.getMultipleUUIDWithoutDashesURL + count,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
     }
    
    getMultipleUUIDsVersionOne(count : string){
            return this.http
            .get(this.getMultipleUUIDVersionOneURL + count,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
     }
    
    getMultipleUUIDsVersionOneWithoutDashes(count : string){
            return this.http
            .get(this.getMultipleUUIDVersionOneWithoutDashesURL + count,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
     }
}