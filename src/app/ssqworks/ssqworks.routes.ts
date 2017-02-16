import { Routes } from '@angular/router';

import { SsqworksComponent } from './ssqworks.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FlatComponent } from './flat/flat.component';
import { LogoComponent } from './logo/logo.component';

export const ssqworksRoutes: Routes = [
    {
        path: '',
        component: SsqworksComponent,
        children: [
            { path: '', redirectTo: 'introduction', pathMatch: 'full' },
            { path: 'introduction', component: IntroductionComponent },
            { path: 'flat', component: FlatComponent },
            { path: 'logo', component: LogoComponent },
            { path: '**', redirectTo: 'introduction' }
        ]
    }
]
