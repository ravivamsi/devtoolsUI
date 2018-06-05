import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ConvertersService {
        
    private contextUrl : string = this.globalSharedService.contextUrl;    
    private areaUrl : string = this.contextUrl + '/area/' ;
    private getCircleAreaURL = '/circle' ;
    private getSquareAreaURL = '/square' ;
    private getRectangleAreaURL = '/rectangle/';
    private getTriangleAreaURL = 'triangle/base/';
    private getTriangleAreaHeightURL = '/height/';
    private triangleFirstURL = '/triangle/first/';
    private triangleSecondURL = '/second/';
    private triangleThirdURL = '/third/' ;
        
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getAreaCircle(circleArea : string){
        console.log("getAreaCircle method in service called");
        return this.http
            .get(this.areaUrl + circleArea + this.getCircleAreaURL,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));        
    }
    
    getAreaSquare(squareArea : string){
        console.log("getAreaSquare method in service called");
        return this.http
            .get(this.areaUrl + squareArea + this.getSquareAreaURL,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getAreaRectangle(width : string, height : string){
        console.log("getAreaRectangle method in service called");
        return this.http
            .get(this.areaUrl + height + this.getRectangleAreaURL + width,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getAreaTriangle(base : string, height : string){
        console.log("getAreaTriangle method in service called");
        return this.http
            .get(this.areaUrl + this.getTriangleAreaURL + base + this.getTriangleAreaHeightURL + height,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getAreaTriangleFromThreeSides(sideOne : string , sideTwo : string , sideThree : string){
        console.log("getAreaTriangleFromThreeSides method in service called");
        return this.http
            .get(this.areaUrl + this.triangleFirstURL + sideOne + this.triangleSecondURL + sideTwo + this.triangleThirdURL + sideThree,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
        
}
