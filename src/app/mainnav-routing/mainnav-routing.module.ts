import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main/main.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ComponentsComponent } from '../components/components.component';
import { MapComponent } from '../map/map.component';
import { ResourcesComponent } from '../resources/resources.component';
import { BlogComponent } from '../blog/blog.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'components', loadChildren: 'app/components/components.module.ts#ComponentsModule' },
  { path: 'map', component: MapComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainnavRoutingModule { }
