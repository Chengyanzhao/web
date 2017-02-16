import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ssqworksRoutes } from './ssqworks.routes';

import { SsqworksComponent } from './ssqworks.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FlatComponent } from './flat/flat.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ssqworksRoutes)
  ],
  declarations: [SsqworksComponent, IntroductionComponent, FlatComponent, LogoComponent]
})
export class SsqworksModule { } 
