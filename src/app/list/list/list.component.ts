import { Component, OnInit } from '@angular/core';

const template = `
<h5>Hey Dawg!</h5>
<div class="vs-container">
  <virtual-scroll 
  [items]="myItems" 
  (update)="scrolledItems = $event"
  (change)="indices = $event">
   <div *ngFor="let item of scrolledItems" class="hey-dawg">{{item}}</div>
  </virtual-scroll>
</div>
`;

@Component({
  selector: 'af-list',
  template,
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items = [];
  myItems = [];

  constructor() {
    for (let i = 1; i <= 10000; i++) {
      this.items.push(i);
    }
  }

  ngOnInit() {
    this.myItems = this.items;
  }

}
