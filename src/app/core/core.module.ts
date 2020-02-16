import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BrowserAnimationsModule
        // RouterModule
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }
