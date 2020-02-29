import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WOW } from 'wowjs/dist/wow.min';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

    public contactForm: FormGroup;
    public emailSent: boolean = false;
    @ViewChild('contactSection', {static: false}) contactSection: ElementRef;


    constructor(private fb: FormBuilder,
        private httpClient: HttpClient) { }

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
            email: ['', [
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\\.[a-zA-Z]{2,15}$')
            ]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }

    public isFormInvalid(field: string) {
        return (this.contactForm.get(field).invalid && this.contactForm.get(field).touched);
    }

    public onContactMe() {
        this.contactSection.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    public onSendEmail() {
        if (this.contactForm.valid) {
            let url = `https://us-central1-carpincullo-22333.cloudfunctions.net/emailMessage`;
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });

            const body = this.getBodyContent();

            this.httpClient.post(url, body, { headers })
                .subscribe((res) => {
                    console.log(res);
                    this.emailSent = true;
                }, (err) => {
                    console.log(err);
                    this.emailSent = false;
                });
        } else {
            Object.keys(this.contactForm.controls).forEach((key) => {
                this.contactForm.get(key).markAsTouched();
            });
        }
    }

    private getBodyContent() {
        const body = {
            from: this.contactForm.get('email').value,
            subject: this.contactForm.get('subject').value,
            content: {
                subject: this.contactForm.get('subject').value,
                title: this.contactForm.get('fullName').value,
                body: this.contactForm.get('message').value
            }
        }
        return body;
    }

    public onNewEmail() {
        this.emailSent = false;
        this.contactForm.reset();
    }
}
