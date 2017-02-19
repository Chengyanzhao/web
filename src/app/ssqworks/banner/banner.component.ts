import { Component, OnInit } from '@angular/core';
import { flyInRight } from '../../animations/fly-in-right';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [flyInRight]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
