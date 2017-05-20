import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TreeModule,TreeNode, FieldsetModule} from 'primeng/primeng';

import { ApiDocumentationService } from './../services/api-documentation.service';


@Component({
    templateUrl: 'app/views/apiDocumentation.html'
    selector: 'documentation'
})

export class ApiDocumentationComponent implements OnInit{
        
    apiData: object[];
        
    constructor(private apiDocumentationService: ApiDocumentationService){
        
    }   
    
    getAPI(apiType : string){
        console.log("getAPI called " + apiType);
        this.apiDocumentationService.getFiles().subscribe(
            data => {
                console.log(data);
                this.apiData = data ;                
            },
            error => {                
                console.log('Exception');
            });        
    }
}
