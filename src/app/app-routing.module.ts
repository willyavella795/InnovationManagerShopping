import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FwSinergiaComponent } from './layouts/fw-sinergia/fw-sinergia.component';
import { LoginComponent } from './layouts/login/login.component';

export const Approutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () => import('./layouts/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: 'fw-sinergia',
    component: FwSinergiaComponent,
    children: [
      { path: '', redirectTo: '/fw-sinergia', pathMatch: 'full' }
    ]
  },
  {
    path: 'seg-usuarios',
    component: FwSinergiaComponent,
    children: [
      { path: '', redirectTo: '/seg-usuarios', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: '/fw-sinergia'
  }
];
