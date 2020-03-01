import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ServicesComponent } from './services.component';

@NgModule({
    declarations: [
        ServicesComponent
    ],
    imports: [
        CommonModule,
        ServicesRoutingModule,
        SharedModule,
        CountUpModule
    ],
    exports: [
        ServicesComponent
    ],
    providers: [],
    bootstrap: []
})
export class ServicesModule { }
