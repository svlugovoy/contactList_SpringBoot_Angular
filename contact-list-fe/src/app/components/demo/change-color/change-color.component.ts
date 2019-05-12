import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {

  bgColor: string;

  ngOnInit() {
    this.bgColor = 'yellowgreen';
  }

  changeBackground(color: string) {
    this.bgColor = color;
  }

  changeBackgroundRandomly() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    this.bgColor = `rgb(${r}, ${g}, ${b})`;
  }
}
