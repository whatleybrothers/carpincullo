import * as fromRoot from '../../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortafolioState } from './portafolio.reducer';

// Selectors

export interface State extends fromRoot.State {
    portafolio: PortafolioState
}

const getPortafolioFeatureState = createFeatureSelector<PortafolioState>('portafolio');

export const getFilterType = createSelector(
    getPortafolioFeatureState,
    state => state.filterType
);

export const getProjects = createSelector(
    getPortafolioFeatureState,
    state => state.projects
);

export const getFilteredProjects = createSelector(
    getPortafolioFeatureState,
    getFilterType,
    (state, filterType) => state.projects.filter((s) => {
        if (filterType === 'ALL'){
            return s;
        } else {
            return (s.description).toUpperCase() === filterType;
        }
    })
);

export const getError = createSelector(
    getPortafolioFeatureState,
    state => state.error
);
