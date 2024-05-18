import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;
  starWidth: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was 
    clicked!`);
  }
  ngOnInit(): void {
    this.starWidth = (this.rating * 90) / 5;
  }
}
