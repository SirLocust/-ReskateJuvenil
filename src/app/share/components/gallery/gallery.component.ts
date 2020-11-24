import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() nameCarrousel = 'one';
  @Input() urlsImgs: string[] =[
    'https://cdn.pixabay.com/photo/2020/05/12/11/32/azalea-5162510_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/05/12/11/32/azalea-5162510_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/05/12/11/32/azalea-5162510_960_720.jpg'

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
