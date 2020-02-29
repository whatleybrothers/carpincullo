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
            email: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }

    public onContactMe() {
        this.contactSection.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    public onSendEmail() {
        let url = `https://us-central1-carpincullo-22333.cloudfunctions.net/emailMessage`;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        const body = this.getBodyContent();

        this.httpClient.post(url, body, { headers })
            .subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
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
}
