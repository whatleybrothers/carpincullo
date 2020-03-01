import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

    customOptions: OwlOptions = {
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    }

    public servicesArray: any[] = [
        {
            img: '../../../assets/img/core-img/camera.png',
            title: 'Wedding Photograpy',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.'
        },
        {
            img: '../../../assets/img/core-img/vector.png',
            title: 'Studio Photograpy',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.'
        },
        {
            img: '../../../assets/img/core-img/pantone.png',
            title: 'Fashion Photograpy',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.'
        },
        {
            img: '../../../assets/img/core-img/video-player.png',
            title: 'Profesional Videos',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.'
        },
        {
            img: '../../../assets/img/core-img/browsing.png',
            title: 'Landscapes',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.'
        },
        {
            img: '../../../assets/img/core-img/develop.png',
            title: 'Photo Journalism',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.'
        }
    ];

    public carouselItems: any[] = [
        {
            id: "1",
            name: 'Maria Smith, Bride 1',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque.'
        },
        {
            id: "2",
            name: 'Maria Smith, Bride 2',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque.'
        },
        {
            id: "3",
            name: 'Maria Smith, Bride 3',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque.'
        },
        {
            id: "4",
            name: 'Maria Smith, Bride 4',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque.'
        },
        {
            id: "5",
            name: 'Maria Smith, Bride 5',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque.'
        }
    ];

    public successAreas: any[] = [
        {
            img: '../../../assets/img/core-img/golden-ratio.png',
            title: 'Happy Brides',
            number: 149
        },
        {
            img: '../../../assets/img/core-img/canvas.png',
            title: 'Landscape Photos',
            number: 2391
        },
        {
            img: '../../../assets/img/core-img/mouse.png',
            title: 'Airbrushed Photos',
            number: 245
        },
        {
            img: '../../../assets/img/core-img/coffee.png',
            title: 'Coffes a month',
            number: 128
        }
    ];

    constructor(private router: Router) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.scroll(0,0);
        new WOW({live: false}).init();
    }

    public onContactMe() {
        this.router.navigate(['/contact']);
    }

    public doSomethingOnComplete() {
        console.log('Completed running counter...');
    }
}
