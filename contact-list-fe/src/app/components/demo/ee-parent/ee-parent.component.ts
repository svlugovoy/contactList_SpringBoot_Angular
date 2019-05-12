import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ee-parent',
  templateUrl: './ee-parent.component.html',
  styleUrls: ['./ee-parent.component.css']
})
export class EeParentComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  displayCounter(value) {
    this.counter = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
