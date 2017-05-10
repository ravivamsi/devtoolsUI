import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DictionaryService } from './../services/dictionary.service';

@Component({
    templateUrl: 'app/views/dictionary.html'
    selector: 'dictionary'
})

export class DictionaryComponent implements OnInit{
        
    word : string ;
    meaning : string ;
    example : string ;
        
    constructor(private dictionaryService: DictionaryService){
        
    }
    
    getMeaning(){
        console.log("GetMeaning method is called");
        this.dictionaryService.getMeaning(this.word).subscribe(
            data => {
                console.log(data);  
                this.meaning = data.definition ; 
                this.example = data.example ;                        
            },
            error => {                
                console.log('Exception');
            });
    }

}