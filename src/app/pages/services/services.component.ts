import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scroll(0,0);
        new WOW().init();
    }

    public onContactMe() {
        this.router.navigate(['/contact']);
    }
}
