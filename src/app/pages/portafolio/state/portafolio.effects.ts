import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { PaginationService } from '../../../core/services/pagination.service';
import * as portafolioActions from './portafolio.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class PortafolioEffects {

    constructor(private actions$: Actions,
        private paginationService: PaginationService) { }

    @Effect()
    loadProjects$: Observable<Action> = this.actions$.pipe(
        ofType(portafolioActions.PortafolioActionTypes.LoadProjects),
        mergeMap((action: portafolioActions.LoadProjects) =>
            this.paginationService.init('gallaryGroupTest', 'created', { reverse: false, prepend: false })
                .pipe(
                    map((projects: any[]) => (new portafolioActions.LoadSuccessProjects(projects))),
                    catchError(err => of(new portafolioActions.LoadFailProjects(err)))
                )
        )
    );

    @Effect()
    addProjects$: Observable<Action> = this.actions$.pipe(
        ofType(portafolioActions.PortafolioActionTypes.AddProjects),
        mergeMap((action: portafolioActions.AddProjects) =>
            this.paginationService.more()
                .pipe(
                    map((projects: any[]) => (new portafolioActions.AddSuccessProjects(projects))),
                    catchError(err => of(new portafolioActions.AddFailProjects(err)))
                )
        )
    );
}
