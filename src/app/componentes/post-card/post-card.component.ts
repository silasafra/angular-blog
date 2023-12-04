import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  constructor() {}
  @Input() title: string = ''
  @Input() banner: string = ''
  @Input() date: string = ''
  @Input() author: string = ''
  @Input() category: string = ''

  ngOnInit(): void {}
}
