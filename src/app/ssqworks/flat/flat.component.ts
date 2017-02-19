import { Component, OnInit } from '@angular/core';
import { flyInRight } from '../../animations/fly-in-right';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css'],
  animations: [
    flyInRight
  ]
})
export class FlatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
