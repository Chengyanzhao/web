import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { resourcesRoutes } from './resources.routes';

import { ResourcesComponent } from './resources.component';


import { ScrollTo } from '../shared/scrollTo';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resourcesRoutes)
  ],
  declarations: [
    ResourcesComponent,
    ScrollTo
  ]
})
export class ResourcesModule { }
