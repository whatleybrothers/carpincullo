import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-ui-text-area',
    templateUrl: './ui-text-area.component.html',
    styleUrls: ['./ui-text-area.component.scss']
})
export class UiTextAreaComponent implements OnInit {

    @Input() public inputId: string;
    @Input() public inputValue: string;
    @Input() public additionalClasses: string;
    @Input() public placeHolderText: string;
    @Input() public theFormGroup: FormGroup;

    constructor() { }

    ngOnInit() {
        this.inputId = this.inputId || '';
        this.additionalClasses = this.additionalClasses || '';
        this.placeHolderText = this.placeHolderText || '';
    }

}
