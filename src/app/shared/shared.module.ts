import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiFormErrorComponent } from './components/ui-form-error/ui-form-error.component';


@NgModule({
    declarations: [
        UiInputComponent,
        UiButtonComponent,
        UiFormErrorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // NgbModule,
        CarouselModule
    ],
    exports: [
        // NgbModule,
        CarouselModule,
        UiInputComponent,
        UiButtonComponent
    ]
})
export class SharedModule { }
