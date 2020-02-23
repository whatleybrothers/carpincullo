import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
        SharedModule
    ],
    exports: [
        ServicesComponent
    ],
    providers: [],
    bootstrap: []
})
export class ServicesModule { }
