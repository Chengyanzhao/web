import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ssqworksRoutes } from './ssqworks.routes';

import { SsqworksComponent } from './ssqworks.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FlatComponent } from './flat/flat.component';
import { LogoComponent } from './logo/logo.component';
import { BannerComponent } from './banner/banner.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { WebsiteComponent } from './website/website.component';
import { WebPageComponent } from './web-page/web-page.component';
import { MaterialsComponent } from './materials/materials.component';
import { WebAppComponent } from './web-app/web-app.component';
import { ExhibitionBoardComponent } from './exhibition-board/exhibition-board.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ssqworksRoutes)
  ],
  declarations: [SsqworksComponent, IntroductionComponent, FlatComponent, LogoComponent, BannerComponent, BusinessCardComponent, WebsiteComponent, WebPageComponent, MaterialsComponent, WebAppComponent, ExhibitionBoardComponent]
})
export class SsqworksModule { } 
