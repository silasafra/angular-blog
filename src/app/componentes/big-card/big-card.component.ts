import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  photoCover: string = ''
  categories: [] = []
  title: string = ''
  author: string = ''

  constructor() {}

  ngOnInit(): void {}
}
