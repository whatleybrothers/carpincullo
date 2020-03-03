import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';
import { PaginationService } from '../../core/services/pagination.service';
import { FilterTypes } from '../../shared/models/filter.types.enum';
import * as fromPortafolio from './state';
import * as fromActions from './state/portafolio.actions';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-portafolio',
    templateUrl: './portafolio.component.html',
    styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, AfterViewInit, OnDestroy {

    public filterTypeItems: any[] = [
        {
            name: 'All',
            type: FilterTypes.ALL,
            active: false
        },
        {
            name: 'Landscapes',
            type: FilterTypes.LANDSCAPES,
            active: false
        },
        {
            name: 'Portraits',
            type: FilterTypes.PORTRAITS,
            active: false
        },
        {
            name: 'Fashion',
            type: FilterTypes.FASHION,
            active: false
        },
        {
            name: 'Studio',
            type: FilterTypes.STUDIO,
            active: false
        }
    ];

    public subs: Subscription;
    public data: Observable<any>;
    public capi: Subscription;

    constructor(public paginationService: PaginationService,
        private router: Router,
        private store: Store<fromPortafolio.State>) { }

    ngOnInit() {
        this.subs = this.store.pipe(
            select(fromPortafolio.getFilteredProjects),
            take(1)
        ).subscribe((res) => {
            if (!res.length) {
                this.store.dispatch(new fromActions.LoadProjects());
            }
        });

        this.data = this.store.pipe(select(fromPortafolio.getFilteredProjects));

        this.capi = this.store.pipe(select(fromPortafolio.getFilterType))
            .subscribe(filterType => {
                this.setFilterType(filterType);
            });
    }

    ngAfterViewInit() {
        window.scroll(0, 0);
        new WOW({live: false}).init();
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
        this.capi.unsubscribe();
    }

    public onFilterClick(type: string) {
        this.store.dispatch(new fromActions.SetFilterTypeCode(type));
    }

    private setFilterType(type: string) {
        this.filterTypeItems.forEach((item) => {
            if (item.type === type) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
    }

    public onLoadMore() {
        this.paginationService.more()
    }

    public onContactMe() {
        this.router.navigate(['/contact']);
    }
}
