import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        data: {
            id: 'about',
            displayName: 'About',
            link: '/about'
        },
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'contact',
        data: {
            id: 'contact',
            displayName: 'Contact',
            link: '/contact'
        },
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'home',
        data: {
            id: 'home',
            displayName: 'Home',
            link: '/home'
        },
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'portafolio',
        data: {
            id: 'portafolio',
            displayName: 'Portafolio',
            link: '/portafolio'
        },
        loadChildren: () => import('./pages/portafolio/portafolio.module').then(m => m.PortafolioModule)
    },
    {
        path: 'services',
        data: {
            id: 'services',
            displayName: 'Services',
            link: '/services'
        },
        loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
