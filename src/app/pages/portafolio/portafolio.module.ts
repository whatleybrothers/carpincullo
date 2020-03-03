import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';

import { PortafolioComponent } from './portafolio.component';

import { reducer } from './state/portafolio.reducer';
import { PortafolioEffects } from './state/portafolio.effects';

@NgModule({
    declarations: [
        PortafolioComponent
    ],
    imports: [
        CommonModule,
        PortafolioRoutingModule,
        SharedModule,
        StoreModule.forFeature('portafolio', reducer),
        EffectsModule.forFeature([PortafolioEffects])
    ],
    exports: [
        PortafolioComponent
    ],
    providers: [],
    bootstrap: []
})
export class PortafolioModule { }
