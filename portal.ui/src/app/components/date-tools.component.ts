import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DateToolsService } from './../services/date-tools.service';

@Component({
    templateUrl: 'app/views/dateTools.html'
    selector: 'dateTools'
})


export class DateToolsComponent implements OnInit{
        
    private defaultDate : string ;
        
    constructor(private dateToolsService : DateToolsService){
        
    }
    
    getDefaultDate(){
        console.log("getDefaultDate method called");
        this.dateToolsService.getDefaultDate().subscribe(
            data => {
                this.defaultDate=data;
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
}