import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  @ViewChild('item') accordion;

  toggle() {
    this.accordion.toggle();
  }
  ngOnInit(): void {}
}
