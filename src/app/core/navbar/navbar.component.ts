import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public displayMenu: boolean = false;
    public sticky: boolean = false;

    public links: any[] = [
        {
            name: 'Home',
            link: '/home',
        },
        {
            name: 'About Me',
            link: '/about',
        },
        {
            name: 'Services',
            link: '/services',
        },
        {
            name: 'Portafolio',
            link: '/portafolio',
        }, {
            name: 'Contact',
            link: '/contact',
        }];

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

    get getDate(): number {
        return new Date().getFullYear();
    }

}
