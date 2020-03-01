import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AboutComponent } from './about.component';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModule,
        NgCircleProgressModule.forRoot()
    ],
    exports: [
        AboutComponent
    ],
    providers: [],
    bootstrap: []
})
export class AboutModule { }
