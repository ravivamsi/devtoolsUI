import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AbbrevationService } from './../services/abbrevation.service';

@Component({
    templateUrl: 'app/views/abbrevations.html'
    selector: 'abbrevation'
})

export class AbbrevationComonent implements OnInit{
        
    word : string ;
    abbrevationType: string ;
    abbrevations : object[] ;
           
    constructor(private abbrevationService: AbbrevationService){
        
    }
    
    getAbbrevation(){
        if(this.abbrevationType == "popular"){
            this.abbrevationService.getPopularAbbrevations(this.word).subscribe(
            data => {
                console.log(data);
                this.abbrevations = data ;                
            },
            error => {                
                console.log('Exception');
            }); 
        }
        else{
            this.abbrevationService.getAllAbbrevations(this.word).subscribe(
            data => {
                console.log(data);
                this.abbrevations = data ; 
            },
            error => {                
                console.log('Exception');
            }); 
        }
    }
