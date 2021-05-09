import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-mark-page',
  templateUrl: './book-mark-page.component.html',
  styleUrls: ['./book-mark-page.component.css'],
})
export class BookMarkPageComponent implements OnInit {
  bookMarkedkMovie: any = [];
  bookMarkedMovie = JSON.parse(localStorage.getItem('movie'));
  constructor() {}
  ngOnInit(): void {}
}
