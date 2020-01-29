import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from './services.component';

export const servicesRoutes: Routes = [
    {
        path: '',
        component: ServicesComponent,
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(servicesRoutes)
    ]
})
export class ServicesRoutingModule {
}
