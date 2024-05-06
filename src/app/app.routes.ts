import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./login/login.component')},
    { path: 'modificador', loadComponent: () => import('./modificador/modificador.component')},
    { path: '', redirectTo: 'modificador', pathMatch: 'full'}
];
