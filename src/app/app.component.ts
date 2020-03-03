import { Component, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    public showLoader: boolean = true;

    constructor() { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.showLoader = false;
        }, 300);
    }
}
