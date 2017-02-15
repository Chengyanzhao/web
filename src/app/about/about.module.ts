import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { aboutRoutes } from './about.routes';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
