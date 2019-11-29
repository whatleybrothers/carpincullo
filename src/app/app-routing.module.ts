import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        data: {
            id: 'home',
            displayName: 'Home',
            link: '/home'
        },
        loadChildren: './views/home/home.module#HomeModule'
    },
    {
        path: 'about',
        data: {
            id: 'about',
            displayName: 'About',
            link: '/about'
        },
        loadChildren: './views/about/about.module#AboutModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
