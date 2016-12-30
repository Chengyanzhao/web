import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainnavRoutingModule } from './mainnav-routing/mainnav-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { ComponentsComponent } from './components/components.component';
import { MapComponent } from './map/map.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MainComponent,
    ComponentsComponent,
    MapComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainnavRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
