import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scroll(0,0);
        new WOW().init();
    }
}
