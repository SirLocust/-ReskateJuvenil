import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent implements OnInit {
  @Input() backgroundUrlImg: string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
