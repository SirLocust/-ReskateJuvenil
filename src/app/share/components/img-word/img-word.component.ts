import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-word',
  templateUrl: './img-word.component.html',
  styleUrls: ['./img-word.component.scss']
})
export class ImgWordComponent implements OnInit {
  @Input() urlBackground = '';
  constructor() { }

  ngOnInit(): void {
  }

}
