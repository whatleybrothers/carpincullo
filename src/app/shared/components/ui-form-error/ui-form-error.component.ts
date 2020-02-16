import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-ui-form-error',
    templateUrl: './ui-form-error.component.html',
    styleUrls: ['./ui-form-error.component.scss']
})
export class UiFormErrorComponent implements OnInit {

    @Input() public errorMsg: string;
    @Input() public displayError: boolean;
    @Input() public inputId: string;
    @Input() public theFormGroup: FormGroup;

    @Output() public errorStatus: EventEmitter<boolean> = new EventEmitter();
    @Output() public clickedClose: EventEmitter<boolean> = new EventEmitter();

    /**
     * @description initializes the values for this component when this lifecycle event occurs.
     * @function ngOnInit
     * @memberof InputWithButtonComponent
     */
    public ngOnInit() {
        this.errorMsg = this.errorMsg || '';
        this.displayError = this.displayError || false;
    }

    public closeErrorMessage() {
        if (this.inputId && this.theFormGroup.get(this.inputId)) {
            this.theFormGroup.get(this.inputId).setValue('');
            this.theFormGroup.get(this.inputId).markAsUntouched();
        }
        this.clickedClose.emit(true);
    }

}
