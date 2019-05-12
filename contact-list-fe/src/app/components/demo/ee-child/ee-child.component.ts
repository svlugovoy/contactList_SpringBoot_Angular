import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ee-child',
  templateUrl: './ee-child.component.html',
  styleUrls: ['./ee-child.component.css']
})
export class EeChildComponent implements OnInit {

  @Output()
  valueChange = new EventEmitter();

  @Input('childCounter')
  counter: number;

  constructor() {
  }

  ngOnInit() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
    this.valueChange.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.valueChange.emit(this.counter);
  }

  reset() {
    this.counter = 0;
    this.valueChange.emit(this.counter);
  }
}
