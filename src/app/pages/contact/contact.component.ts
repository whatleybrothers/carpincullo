import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

    public contactForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.initiateForm();
    }


    ngAfterViewInit() {
        window.scroll(0,0);
        new WOW().init();
    }

    public initiateForm() {
        this.contactForm = this.fb.group({
            fullName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }

}
