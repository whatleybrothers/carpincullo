import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule
    ],
    exports: [
        ContactComponent
    ],
    providers: [],
    bootstrap: []
})
export class ContactModule { }
