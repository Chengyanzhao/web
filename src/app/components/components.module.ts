import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';

import { ComponentsComponent } from './components.component';
import { AnimationComponent } from './animation/animation.component';
import { ClockComponent } from './clock/clock.component';
import { FontComponent } from './font/font.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  declarations: [
    ComponentsComponent,
    AnimationComponent,
    ClockComponent,
    FontComponent,
    ImageComponent
  ]
})
export class ComponentsModule { }
