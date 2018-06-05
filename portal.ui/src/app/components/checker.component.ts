import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CheckerService } from './../services/checker.service';

@Component({
    templateUrl: 'app/views/checker.html'
    selector: 'checker'
})

export class CheckerComponent implements OnInit{
        
    ignoreCase : boolean = true  ;
    divisor : string ;
    amstrongNumber : string ;
    evenAndOdd : string ;
    leapYear : string ;
    primeNumber : string ;
    palindrome : string ;
    divisor1 : string ;
    divisor2 : string ;
        
    constructor(private checkerService: CheckerService){
        
    }
        
    checkArmstrong(){
        console.log("checkAmstrong method called");
        this.checkerService.checkAmstrong(this.amstrongNumber).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            }); 
    }
    
    checkEvenOdd(){
        console.log("evenOdd method called");
        this.checkerService.checkEvenOdd(this.evenAndOdd).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });     
    }
    
    checkLeapYear(){
        console.log("leapYear method called");
        this.checkerService.checkLeapYear(this.leapYear).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });     
    }
    
    checkPrimeNumber(){
        console.log("checkPrimeNumber method called");
        this.checkerService.checkPrimeNumber(this.primeNumber).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });
    }
    
    checkPalindrome(){
        console.log("checkPalindrome method called");           
        if(this.ignoreCase == true){
            this.checkerService.checkPalindromeIgnoreCase(this.palindrome).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });
        }
        else{
            this.checkerService.checkPalindrome(this.palindrome).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });
        }
    }
    
    getDivision(){
        console.log("checkPalindrome method called " + this.divisor);
        if(this.divisor == 'divisor'){
            this.checkerService.getDivisor(this.divisor1, this.divisor2).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });
        }
        else if(this.divisor == 'reminder'){
            this.checkerService.getReminder(this.divisor1, this.divisor2).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });
        }
        else{
            this.checkerService.getQuotient(this.divisor1, this.divisor2).subscribe(
            data => {
                console.log(data);
            },
            error => {                
                console.log('Exception');
            });
        }
    }
    
}