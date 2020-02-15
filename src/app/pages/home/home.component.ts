import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        new WOW().init();
    }

}
