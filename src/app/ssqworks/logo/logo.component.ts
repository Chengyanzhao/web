import { Component, OnInit } from '@angular/core';
import { flyInRight } from '../../animations/fly-in-right';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  animations:[ flyInRight ]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
