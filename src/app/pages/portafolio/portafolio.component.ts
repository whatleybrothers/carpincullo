import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'app-portafolio',
    templateUrl: './portafolio.component.html',
    styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scroll(0,0);
        new WOW().init();
    }

}
