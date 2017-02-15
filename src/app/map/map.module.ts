import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { mapRoutes } from './map.routes';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes)
  ],
  declarations: [MapComponent]
})
export class MapModule { }
