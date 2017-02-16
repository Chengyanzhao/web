import { Component, Renderer, OnInit } from '@angular/core';
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
  { routePath: 'ssqworks', routeActive: 'active', innerText: '简历', isDefaultActive: false, attrDirective: '' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  navconfigs = mainNavConfig;

  constructor(public renderer: Renderer) {
  }

  /** 
   * 控制返回顶部按钮显示/隐藏
  */
  btnTopControl(): void {
    let _this = this;
    window.document.onscroll = function ($event: UIEvent) {
      let btnTop = document.getElementById('btn-top');
      if (window.scrollY > window.innerHeight) {
        _this.renderer.setElementStyle(btnTop, 'display', 'block');
      } else {
        _this.renderer.setElementStyle(btnTop, 'display', 'none');
      }
    }
  }
  onNavLink($event): void {
    $event.preventDefault();
  }
  goHome($event): void {
    $event.preventDefault();
  }
  goTop($event): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.btnTopControl();
  }
}
