import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scroll(0, 0);
        new WOW({live: false}).init();
    }

    public onContactMe() {
        this.router.navigate(['/contact']);
    }
}
