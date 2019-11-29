import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(homeRoutes)
    ]
})
export class HomeRoutingModule {
}
