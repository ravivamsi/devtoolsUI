import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app/views/app.component.html'
})

export class AppComponent implements OnInit { 

    constructor(private _router: Router){
        
    }

    ngOnInit(){
        this._router.navigate(['home']);
    }
}