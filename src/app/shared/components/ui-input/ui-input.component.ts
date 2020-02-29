import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-ui-input',
    templateUrl: './ui-input.component.html',
    styleUrls: ['./ui-input.component.scss']
})
export class UiInputComponent implements OnInit {

    @Input() public inputId: string;
    @Input() public inputValue: string;
    @Input() public additionalClasses: string;
    @Input() public placeHolderText: string;
    @Input() public theFormGroup: FormGroup;

    /**
     * @description initializes the values for this component when this lifecycle event occurs.
     * @function ngOnInit
     * @memberof InputComponent
     */
    public ngOnInit() {
        this.inputId = this.inputId || '';
        this.additionalClasses = this.additionalClasses || '';
        this.placeHolderText = this.placeHolderText || '';
    }

    // public clearInput() {
    //     this.theFormGroup.get(this.inputId).setValue('');
    // }
}
