import { Component, OnInit } from '@angular/core';
import { flyInLeft } from '../../animations/fly-in-left';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css'],
  animations: [
    flyInLeft
  ]
})
export class FlatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
