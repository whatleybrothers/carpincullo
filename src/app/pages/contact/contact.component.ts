import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        new WOW().init();
    }

}
