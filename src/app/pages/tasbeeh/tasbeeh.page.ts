import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasbeeh',
  templateUrl: './tasbeeh.page.html',
  styleUrls: ['./tasbeeh.page.scss'],
})
export class TasbeehPage implements OnInit {

  counterLabel: number;
  counter: number;

  constructor() {
    this.counterLabel = 0;
    this.counter = 0;
  }

  tasbeehCounter() {
    console.log("Tasbeeh Clicked!!")
    this.counter++;
    this.counterLabel = this.counter;

  }

  resetCounter() {
    console.log("Reset Clicked!!")
    this.counter = 0;
    this.counterLabel = 0;

  }

  ngOnInit() {
  }


}

