import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { PortafolioComponent } from './portafolio.component';

@NgModule({
    declarations: [
        PortafolioComponent
    ],
    imports: [
        CommonModule,
        PortafolioRoutingModule,
        SharedModule
    ],
    exports: [
        PortafolioComponent
    ],
    providers: [],
    bootstrap: []
})
export class PortafolioModule { }
