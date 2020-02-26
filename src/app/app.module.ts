import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config = {
    apiKey: "AIzaSyApeBEzL7Vzy39dPJXd6uIs2B7BedNIp8c",
    authDomain: "carpincullo-22333.firebaseapp.com",
    databaseURL: "https://carpincullo-22333.firebaseio.com",
    projectId: "carpincullo-22333",
    storageBucket: "carpincullo-22333.appspot.com",
    messagingSenderId: "125210824994",
    appId: "1:125210824994:web:3e7acf86b33ddd197ed57b",
    measurementId: "G-BB60C75BQZ"
};


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // NgbModule,
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        AngularFireModule.initializeApp(config),
        AngularFireStorageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
