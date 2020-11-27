import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-gallery',
  templateUrl: './body-gallery.component.html',
  styleUrls: ['./body-gallery.component.scss']
})
export class BodyGalleryComponent implements OnInit {
  gallery1 = [
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (1).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (2).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (3).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (4).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (5).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (6).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (7).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (8).jpg',
    'assets/FundacionReskateJuvenil/FundacionImg2/2 (9).jpg',
  ];
  gallery2 = [
    'assets/FundacionReskateJuvenil/Calera/calera (1).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (2).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (3).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (4).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (5).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (6).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (7).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (8).JPG',
    'assets/FundacionReskateJuvenil/Calera/calera (9).JPG',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
