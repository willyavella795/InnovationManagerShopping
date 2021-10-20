import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
/* import {MaterialModule} from 'src/app/material.module'; */

import { StarterComponent } from './starter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login Page',
      urls: [
        { title: 'Login', url: '/login' },
        { title: 'Login Page' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, /* MaterialModule, */ RouterModule.forChild(routes)],
  declarations: [StarterComponent]
})
export class StarterModule {}
