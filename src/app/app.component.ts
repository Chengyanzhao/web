import { Component } from '@angular/core';
export class NavConfig {
  routePath: string;
  routeActive: string;
  innerText: string;
  isDefaultActive: boolean;
}

const mainNavConfig: NavConfig[] = [
  { routePath: 'home', routeActive: 'active', innerText: 'home', isDefaultActive: true },
  { routePath: 'blog', routeActive: 'active', innerText: 'blog', isDefaultActive: false },
  { routePath: 'components', routeActive: 'active', innerText: 'components', isDefaultActive: false },
  { routePath: 'map', routeActive: 'active', innerText: 'map', isDefaultActive: false },
  { routePath: 'contact', routeActive: 'active', innerText: 'contact', isDefaultActive: false },
  { routePath: 'about', routeActive: 'active', innerText: 'about', isDefaultActive: false },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navconfigs = mainNavConfig;
  onNavLink($event): void {
    $event.preventDefault();
  }
}
