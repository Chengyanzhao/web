import { Component, OnInit } from '@angular/core';
import { flyInRight } from '../../animations/fly-in-right';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [flyInRight]
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
