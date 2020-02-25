import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public sticky: boolean = false;

    constructor() { }

    ngOnInit() {
        this.configureHeaderPosition();
    }

    private configureHeaderPosition() {
        fromEvent(window, 'scroll').subscribe(() => {
            this.sticky = window.scrollY > 150;
        });
    }

    get getDate(): number {
        return new Date().getFullYear();
    }

    public scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
