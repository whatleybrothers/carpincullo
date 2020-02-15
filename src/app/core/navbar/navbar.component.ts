import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable, Subscription, timer} from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public displayMenu: boolean = false;
    public sticky: boolean = false;

    constructor() { }

    ngOnInit() {
        this.configureHeaderPosition();
    }

    private configureHeaderPosition() {
        fromEvent(window, 'scroll').subscribe(() => {
            this.sticky = window.scrollY > 0;
        });
    }

    public showMenu() {
        this.displayMenu = true;
    }

    public hideMenu() {
        this.displayMenu = false;
    }

}
