import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ServicesComponent } from './pages/services/services.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { PortafolioComponent } from './pages/portafolio/portafolio.component';
// import { NavbarComponent } from './core/navbar/navbar.component';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
