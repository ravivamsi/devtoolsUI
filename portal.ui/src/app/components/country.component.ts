import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {DataTableModule,SharedModule, Message} from 'primeng/primeng';

import { CountryService } from './../services/country.service';


@Component({
    templateUrl: 'app/views/country.html',
    selector: 'country'    
})

export class CountryComponent implements OnInit{
        
    searchType : string ;
    word : string ;
    country : object[] ;
    
    constructor(private countryService: CountryService){
        
    }
    
    getCountries(){
        console.log("getCountries method called " + this.searchType + " " + this.word);
        this.countryService.getCountry(this.word, this.searchType).subscribe(
            data => {
                console.log(data);    
                this.country = data ;            
            },
            error => {                
                console.log('Exception');
            });       
    }
    
}
