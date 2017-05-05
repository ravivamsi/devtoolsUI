import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES, AbstractControl, Control } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
import { Headers } from '@angular/http';

import { UuidService } from './../services/uuid.service';


@Component({
	templateUrl: 'app/views/generateUuid.html'
	selector: 'uuid'
})

export class GenerateUuidComponent implements OnInit{
    
    uuidOne: string;
    uuidWithoutDashes: string;
    uuidVersionOne: string;
    uuidVersionOneWithoutDashes: string ;
    
    constructor(private uuidService: UuidService){
        
    }
    
    getUUIDOne(){
        console.log("uuidOne method called");
        this.uuidService.getUUIDTypeOne().subscribe(
            data => {
                this.uuidOne=data;
            },
            error => {                
                console.log('Exception');
            });        
    }
    
    getUUIDWithoutDashes(){
        console.log("uuid without Dashes");
        this.uuidService.getUUIDWithoutDashes().subscribe(
            data => {
                this.uuidWithoutDashes=data.uuid;
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    getUUIDVersionOne(){
        console.log("uuid Version One");
        this.uuidService.getUuidVersionOne().subscribe(
            data => {
                this.uuidVersionOne=data;
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    getUUIDVersionOneWithoutDashes(){
        console.log("uuid Version One Without Dashes");
        this.uuidService.getUUIDVersionOneWithoutDashes().subscribe(
            data => {
                this.uuidVersionOneWithoutDashes=data.uuid;
            },
            error => {                
                console.log('Exception');
            });
    }
}