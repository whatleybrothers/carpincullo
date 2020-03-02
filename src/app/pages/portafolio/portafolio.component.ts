import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';
import { PaginationService } from '../../core/services/pagination.service';

@Component({
    selector: 'app-portafolio',
    templateUrl: './portafolio.component.html',
    styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, AfterViewInit {

    constructor(public paginationService: PaginationService,
        private router: Router) { }

    ngOnInit() {
        this.paginationService.reset();
        this.paginationService.init('gallaryGroupTest', 'created', { reverse: false, prepend: false })
    }

    ngAfterViewInit() {
        window.scroll(0, 0);
        new WOW({live: false}).init();
    }

    public onLoadMore() {
        this.paginationService.more()
    }

    public onContactMe() {
        this.router.navigate(['/contact']);
    }
}
