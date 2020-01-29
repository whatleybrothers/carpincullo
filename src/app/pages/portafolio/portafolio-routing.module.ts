import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortafolioComponent} from './portafolio.component';

export const portafolioRoutes: Routes = [
    {
        path: '',
        component: PortafolioComponent,
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(portafolioRoutes)
    ]
})
export class PortafolioRoutingModule {
}
