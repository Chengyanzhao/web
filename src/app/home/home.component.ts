import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  private isShowComsLst: boolean = false;
  tempYearProgress: number = 0;
  yearProgress: string = '0';
  yearProgressRatio: string = '0%';
  curYear: number = 0;
  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    this.curYear = date.getFullYear();
    let current = date.getTime();
    let start = (new Date(date.getFullYear(), 0, 1)).getTime();
    let end = (new Date(date.getFullYear() + 1, 0, 1)).getTime();
    this.tempYearProgress = Math.round((current - start) / (end - start) * 100);
    this.yearProgress = this.tempYearProgress.toString();
    this.yearProgressRatio = (this.tempYearProgress).toString() + '%';
  }

  comListToggle($event): void {
    $event.preventDefault();
    this.isShowComsLst = !this.isShowComsLst;
  }
}
