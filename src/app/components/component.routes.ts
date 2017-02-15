import { Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { AnimationComponent } from './animation/animation.component';
import { ClockComponent } from './clock/clock.component';
import { FontComponent } from './font/font.component';
import { ImageComponent } from './image/image.component';


export const componentRoutes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            { path: '', redirectTo: 'animation', pathMatch: 'full' },
            { path: 'animation', component: AnimationComponent },
            { path: 'clock', component: ClockComponent },
            { path: 'font', component: FontComponent },
            { path: 'image', component: ImageComponent },
            { path: '**', redirectTo: 'animation' }
        ]
    }
]