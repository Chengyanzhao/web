import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// // The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';

// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app.module.ngfactory';

// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

var figlet = require('figlet');
figlet.defaults({ fontPath: './assets/fonts' });
figlet.text('darkclouds.top\r\n451354@qq.com', {
  font: 'Univers',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
