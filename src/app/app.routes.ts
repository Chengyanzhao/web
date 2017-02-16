import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: 'home', loadChildren: 'app/home/home.module.ts#HomeModule' },
    { path: 'blog', loadChildren: 'app/blog/blog.module.ts#BlogModule' },
    { path: 'components', loadChildren: 'app/components/components.module.ts#ComponentsModule' },
    { path: 'map', loadChildren: 'app/map/map.module.ts#MapModule' },
    { path: 'resources', loadChildren: 'app/resources/resources.module.ts#ResourcesModule' },
    { path: 'contact', loadChildren: 'app/contact/contact.module.ts#ContactModule' },
    { path: 'about', loadChildren: 'app/about/about.module.ts#AboutModule' },
    { path: 'ssqworks', loadChildren: 'app/ssqworks/ssqworks.module.ts#SsqworksModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', loadChildren: 'app/home/home.module.ts#HomeModule' }
]

