import { Component, OnInit, Renderer } from '@angular/core';
import { flyInLeft } from '../animations/fly-in-left';

@Component({
  selector: 'app-ssqworks',
  templateUrl: './ssqworks.component.html',
  styleUrls: ['./ssqworks.component.scss'],
  animations: [
    flyInLeft
  ]
})
export class SsqworksComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.setViewHeight();
  }
  setViewHeight(): void {
    // let height = window.innerHeight - Number.parseInt(window.document.getElementsByTagName('header')[0].style.height) -
    //   Number.parseInt(window.document.getElementsByTagName('footer')[0].style.height);
    // this.renderer.setElementStyle(window.document.getElementsByClassName('header')[0], 'height', height.toString());
  }

}
