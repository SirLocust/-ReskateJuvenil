import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.scss']
})
export class BodyPageComponent implements OnInit {
  gallery1 = [
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (1).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (2).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (3).jpg',

    'assets/FundacionReskateJuvenil/FundacionImg2/2 (6).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (7).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (8).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (9).jpg',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
