import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private isShowComsLst: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  comListToggle($event): void {
    $event.preventDefault();
    this.isShowComsLst = !this.isShowComsLst;
  }
}
