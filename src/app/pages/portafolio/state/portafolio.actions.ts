import { Action } from '@ngrx/store';

export enum PortafolioActionTypes {
    SetFilterTypeCode = '[Portafolio] Set filter type code',
    LoadProjects = '[Portafolio] Load',
    LoadSuccessProjects = '[Portafolio] Load Success',
    LoadFailProjects = '[Portafolio] Load Fail',
    FilterProjects = '[Portafolio] Filter Projects',
    AddProjects = '[Portafolio] Add',
    AddSuccessProjects = '[Portafolio] Add Success',
    AddFailProjects = '[Portafolio] Add Fail'
};

export class SetFilterTypeCode implements Action {
    readonly type = PortafolioActionTypes.SetFilterTypeCode

    constructor (public payload: string) { }
}

// Load

export class LoadProjects implements Action {
    readonly type = PortafolioActionTypes.LoadProjects
}

export class LoadSuccessProjects implements Action {
    readonly type = PortafolioActionTypes.LoadSuccessProjects

    constructor(public payload: any[]) {}
}

export class LoadFailProjects implements Action {
    readonly type = PortafolioActionTypes.LoadFailProjects

    constructor(public payload: string) {}
}

// Add

export class AddProjects implements Action {
    readonly type = PortafolioActionTypes.AddProjects
}

export class AddSuccessProjects implements Action {
    readonly type = PortafolioActionTypes.AddSuccessProjects

    constructor (public payload: any[]) { }
}

export class AddFailProjects implements Action {
    readonly type = PortafolioActionTypes.AddFailProjects

    constructor (public payload: string) { }
}

export type PortafolioActions = SetFilterTypeCode
    | LoadProjects
    | LoadSuccessProjects
    | LoadFailProjects
    | AddProjects
    | AddSuccessProjects
    | AddFailProjects;

