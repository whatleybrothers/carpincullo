import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import { PaginationService } from '../../core/services/pagination.service';

@Component({
    selector: 'app-portafolio',
    templateUrl: './portafolio.component.html',
    styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, AfterViewInit {

    constructor(public paginationService: PaginationService) { }

    ngOnInit() {
        this.paginationService.init('gallaryGroupTest', 'created', { reverse: false, prepend: false })
    }

    ngAfterViewInit() {
        window.scroll(0, 0);
        new WOW().init();
    }

    public onLoadMore() {
        this.paginationService.more()
    }
}
