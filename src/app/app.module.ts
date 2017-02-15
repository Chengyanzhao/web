import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';


/**
 * 通用工具指令
 */
import { ScrollTo } from './shared/scrollTo';
import { FigletDirective } from './shared/directive/figlet.directive';
import { CancelDefEvent } from './shared/directive/cancelDefEvent.directive';
import { BackTopDirective } from './shared/directive/backTop.directive';
import { GoHomeDirective } from './shared/go-home.directive';

@NgModule({
  declarations: [
    // component start
    AppComponent,
    // component end

    // directive start
    GoHomeDirective,
    CancelDefEvent,
    FigletDirective,
    BackTopDirective
    // directive end
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
