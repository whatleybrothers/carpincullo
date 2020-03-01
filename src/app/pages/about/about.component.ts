import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

    public progressBars: any[] = [
        {
            name: 'Creativity',
            value: 80,
        },
        {
            name: 'Pacience',
            value: 90,
        },
        {
            name: 'Commited',
            value: 100,
        }
    ];

    public progressCircles: any[] = [
        {
            name: 'Landsacpes',
            value: 80,
        },
        {
            name: 'Portraits',
            value: 90,
        },
        {
            name: 'Studio',
            value: 100,
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scroll(0, 0);
        new WOW({ live: false }).init();
    }

    public onContactMe() {
        this.router.navigate(['/contact']);
    }
}
