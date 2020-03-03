import { FilterTypes } from 'src/app/shared/models/filter.types.enum';
import { PortafolioActions, PortafolioActionTypes } from './portafolio.actions';

// Reducer

export interface PortafolioState {
    filterType: string,
    projects: any[],
    error: string
}

const initialState: PortafolioState = {
    filterType: FilterTypes.ALL,
    projects: [],
    error: ''
}

export function reducer(state = initialState, action: PortafolioActions): PortafolioState {
    switch(action.type) {
        case PortafolioActionTypes.SetFilterTypeCode:
            return {
                ...state,
                filterType: action.payload
            };
        case PortafolioActionTypes.LoadSuccessProjects:
            return {
                ...state,
                projects: action.payload,
                error: ''
            };
        case PortafolioActionTypes.LoadFailProjects:
            return {
                ...state,
                projects: [],
                error: action.payload
            };
        case PortafolioActionTypes.AddSuccessProjects:
            return {
                ...state,
                projects: [...state.projects, ...action.payload],
                error: ''
            };
        case PortafolioActionTypes.AddFailProjects:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
