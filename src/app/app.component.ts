import { Component } from '@angular/core';
export class NavConfig {
  routePath: string;
  routeActive: string;
  innerText: string;
  isDefaultActive: boolean;
  attrDirective: string;
}

const mainNavConfig: NavConfig[] = [
  { routePath: 'home', routeActive: 'active', innerText: 'home', isDefaultActive: true, attrDirective: 'go-back' },
  { routePath: 'blog', routeActive: 'active', innerText: 'blog', isDefaultActive: false, attrDirective: '' },
  { routePath: 'components', routeActive: 'active', innerText: 'components', isDefaultActive: false, attrDirective: '' },
  { routePath: 'map', routeActive: 'active', innerText: 'map', isDefaultActive: false, attrDirective: '' },
  { routePath: 'resources', routeActive: 'active', innerText: 'resources', isDefaultActive: false, attrDirective: '' },
  { routePath: 'contact', routeActive: 'active', innerText: 'contact', isDefaultActive: false, attrDirective: '' },
  { routePath: 'about', routeActive: 'active', innerText: 'about', isDefaultActive: false, attrDirective: '' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  navconfigs = mainNavConfig;
  onNavLink($event): void {
    $event.preventDefault();
  }
  goHome($event): void {
    $event.preventDefault();
  }
}
