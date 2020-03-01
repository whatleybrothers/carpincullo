import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { PaginationService } from './services/pagination.service';

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
    providers: [
        PaginationService
    ],
    bootstrap: []
})
export class CoreModule { }
