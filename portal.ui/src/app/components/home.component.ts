import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES, AbstractControl, Control } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
import { Headers } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
	templateUrl: 'app/views/home.html',
    selector: 'homePage'
})

export class HomeComponent {
    
    constructor(public router: Router) {}    

}