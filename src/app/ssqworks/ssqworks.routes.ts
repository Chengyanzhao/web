import { Routes } from '@angular/router';

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

export const ssqworksRoutes: Routes = [
    {
        path: '',
        component: SsqworksComponent,
        children: [
            { path: '', redirectTo: 'introduction', pathMatch: 'full' },
            { path: 'introduction', component: IntroductionComponent },
            // { path: 'flat', component: FlatComponent },

            { path: 'banner', component: BannerComponent },
            { path: 'logo', component: LogoComponent },
            { path: 'businesscard', component: BusinessCardComponent },
            { path: 'website', component: WebsiteComponent },
            { path: 'webpage', component: WebPageComponent },
            { path: 'materials', component: MaterialsComponent },
            { path: 'webapp', component: WebAppComponent },
            { path: 'exhibitionboard', component: ExhibitionBoardComponent },
            { path: '**', redirectTo: 'introduction' }
        ]
    }
]
