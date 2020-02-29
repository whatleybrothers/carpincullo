import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiFormErrorComponent } from './components/ui-form-error/ui-form-error.component';
import { UiTextAreaComponent } from './components/ui-text-area/ui-text-area.component';


@NgModule({
    declarations: [
        UiInputComponent,
        UiButtonComponent,
        UiFormErrorComponent,
        UiTextAreaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // NgbModule,
        CarouselModule
    ],
    exports: [
        // NgbModule,
        CarouselModule,
        UiInputComponent,
        UiButtonComponent,
        UiFormErrorComponent,
        UiTextAreaComponent
    ]
})
export class SharedModule { }
