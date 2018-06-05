import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { GlobalSharedService } from './../services/global-shared.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class CheckerService {
        
    private inputValue : string = "10";
    private inputValueTwo : string = "5";
    private contextUrl : string = this.globalSharedService.contextUrl;
    private checkAmstrongURL: string = this.contextUrl + '/armstrong/';
    private checkEvenOddURL: string = this.contextUrl + '/evenodd/';
    private checkLeapYearURL: string = this.contextUrl + '/leapyear/';
    private checkPrimeNumberURL: string = this.contextUrl + '/prime/';
    private checkPalindromURL: string = this.contextUrl + '/palindrome/';
    private checkPalindromIgnoreCaseURL : string = '/ignorecase';
    private divisorOneURL: string = '/division/';
    private divisorTwoURL: string = '/divisor/' ;
    private reminderURL: string = '/reminder';
    private quotientURL : string = '/quotient';
    
    constructor(private http: Http, private globalSharedService : GlobalSharedService) { }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    checkAmstrong(amstrongNumber : string) {
        console.log("checkAmstrong method in service called " + amstrongNumber);        
        return this.http
            .get(this.checkAmstrongURL+amstrongNumber,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    } 
    
    checkEvenOdd(evenAndOdd : string){
        return this.http
            .get(this.checkEvenOddURL + evenAndOdd,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    } 
    
    checkLeapYear(leapYear : string){
        return this.http
            .get(this.checkLeapYearURL + leapYear,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    checkPrimeNumber(primeNumber : string){
        return this.http
            .get(this.checkPrimeNumberURL + primeNumber,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    checkPalindrome(palindrome : string){
        return this.http
            .get(this.checkPalindromURL + palindrome,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    checkPalindromeIgnoreCase(palindrome : string){
        return this.http
            .get(this.checkPalindromURL + palindrome + this.checkPalindromIgnoreCaseURL,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getDivisor(divisor1 : string, divisor2 : string){
        return this.http
            .get(this.contextUrl + this.divisorOneURL + divisor1 + this.divisorTwoURL + divisor2 
                ,'',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getReminder(divisor1 : string, divisor2 : string){
        return this.http
            .get(this.contextUrl + this.divisorOneURL + divisor1 + this.divisorTwoURL + divisor2 + this.reminderURL,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
    
    getQuotient(divisor1 : string, divisor2 : string){
        return this.http
            .get(this.contextUrl + this.divisorOneURL + divisor1 + this.divisorTwoURL + divisor2 + this.quotientURL,
                '',{ headers: this.globalSharedService.getJWTHeader() }).map(response => response.json())
            .catch(err => this.handleError(err));
    }
}