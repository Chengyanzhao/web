import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { AnimationComponent } from './animation/animation.component';
import { ClockComponent } from './clock/clock.component';
import { FontComponent } from './font/font.component';
import { ImageComponent } from './image/image.component';

const comsRoutes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            { path: '', component: AnimationComponent },
            { path: 'clock', component: ClockComponent },
            { path: 'FontComponent', component: ClockComponent },
            { path: 'image', component: ImageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(comsRoutes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }