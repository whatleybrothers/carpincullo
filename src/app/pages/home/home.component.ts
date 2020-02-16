import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    customOptions: OwlOptions = {
        items: 4,
        margin: 0,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    }

    public carouselItems: any[] = [
        {
            id: 1,
            imgLink: '../../../assets/img/bg-img/slide1.jpg',
            title: 'Title_1',
            content: 'Content_1'
        },
        {
            id: 2,
            imgLink: '../../../assets/img/bg-img/slide2.jpg',
            title: 'Title_1',
            content: 'Content_1'
        },
        {
            id: 3,
            imgLink: '../../../assets/img/bg-img/slide3.jpg',
            title: 'Title_1',
            content: 'Content_1'
        },
        {
            id: 4,
            imgLink: '../../../assets/img/bg-img/slide4.jpg',
            title: 'Title_1',
            content: 'Content_1'
        }
    ];

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        new WOW().init();
    }

}
