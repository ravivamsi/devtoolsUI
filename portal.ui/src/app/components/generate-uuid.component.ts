import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
    uuidType : string;
    uuidCount : string = 1;
    uuids : string ;
    
    constructor(private uuidService: UuidService){
        
    }
    
    getUUID(){
        console.log(this.uuidType + "  --  " + this.uuidCount);
        if(this.uuidCount == null)
            this.uuidCount = 1 ;
        if(this.uuidType == "typeOne"){
            this.uuidService.getMulitpleUUIDs(this.uuidCount).subscribe(
            data => {
                console.log(data);
                this.uuids = data.uuid ;
            },
            error => {                
                console.log('Exception');
            });
        }
        else if(this.uuidType == "typeOneWithoutDashes"){
            this.uuidService.getMultipleUUIDsWithoutDashes(this.uuidCount).subscribe(
            data => {
                console.log(data);
                this.uuids = data.uuid ;
            },
            error => {                
                console.log('Exception');
            });
        }
        else if(this.uuidType == "versionOne"){
            this.uuidService.getMultipleUUIDsVersionOne(this.uuidCount).subscribe(
            data => {
                console.log(data);
                this.uuids = data.uuid ;
            },
            error => {                
                console.log('Exception');
            });
        }
        else if(this.uuidType == "versionOneWithoutDashes"){
            this.uuidService.getMultipleUUIDsVersionOneWithoutDashes(this.uuidCount).subscribe(
            data => {
                console.log(data);
                this.uuids = data.uuid ;
            },
            error => {                
                console.log('Exception');
            });
        }
        
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
    
    generateMultipleUUID(){
        console.log("Generate Multiple UUID");
        this.uuidService.getMulitpleUUIDs().subscribe(
            data => {                
                console.log(data);
                
            },
            error => {                
                console.log('Exception');
            });
    }
    
    generateMultipleUUIDWithoutDashes(){
        console.log("Generate Multiple UUID");
        this.uuidService.getMultipleUUIDsWithoutDashes().subscribe(
            data => {                
                console.log(data);
                
            },
            error => {                
                console.log('Exception');
            });
    }
}