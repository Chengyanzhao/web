import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainnavRoutingModule } from './mainnav-routing/mainnav-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

import { MapComponent } from './map/map.component';
import { BlogComponent } from './blog/blog.component';
import { GoHomeDirective } from './shared/go-home.directive';
import { ResourcesComponent } from './resources/resources.component';
import { ColorComponent } from './resources/color/color.component';


/**
 * 通用工具指令
 */
import { ScrollTo } from './shared/scrollTo';
import { CancelDefEvent } from './shared/directive/cancelDefEvent.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    MapComponent,
    BlogComponent,
    GoHomeDirective,
    ResourcesComponent,
    ColorComponent,
    ScrollTo,
    CancelDefEvent
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
