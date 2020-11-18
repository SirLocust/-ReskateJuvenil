import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-color',
  templateUrl: './hero-color.component.html',
  styleUrls: ['./hero-color.component.scss']
})
export class HeroColorComponent implements OnInit {
  @Input() backgroundColor = 'white';
  constructor() { }

  ngOnInit(): void {
  }

}
