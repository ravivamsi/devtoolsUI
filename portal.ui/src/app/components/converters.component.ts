import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ConvertersService } from './../services/converters.service';

@Component({
    templateUrl: 'app/views/conveters.html'
    selector: 'conveters'
})


export class ConvertersComponent implements OnInit{
        
    private areaCircle : string ;
    private areaSquare : string ;
    private rectangleHeight : string ;
    private rectangleWidth : string ;
    private triangleBase : string ;
    private triangleHeight : string ;
    private triangleFirstSide : string ;
    private triangleSecondSide : string ;
    private triangleThirdSide : string ;
    
     
    constructor(private convertersService : ConvertersService){
        
    }
    
    
    checkAreaCircle(){
        console.log("CheckAreaCircle method called");
        this.convertersService.getAreaCircle(this.areaCircle).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    checkAreaSquare(){
        console.log("checkAreaSquare method called");
        this.convertersService.getAreaSquare(this.areaSquare).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    checkAreaRectangle(){
        console.log("checkAreaSquare method called");
        this.convertersService.getAreaRectangle(this.rectangleWidth, this.rectangleHeight).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    checkAreaTriangle(){
        console.log("checkAreaTriangle method called");
        this.convertersService.getAreaTriangle(this.triangleBase, this.triangleHeight).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    checkAreaTriangleFromThreeSides(){
        console.log("checkAreaTriangleFromThreeSides method called");
        this.convertersService.getAreaTriangleFromThreeSides(this.triangleFirstSide, this.triangleSecondSide, this.triangleThirdSide).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            }); 
    }
}