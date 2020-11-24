import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroImgComponent } from './components/hero-img/hero-img.component';
import { HeroColorComponent } from './components/hero-color/hero-color.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImgWordComponent } from './components/img-word/img-word.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeroImgComponent, HeroColorComponent, ImgWordComponent, GalleryComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeroImgComponent,
    HeroColorComponent,
    FontAwesomeModule,
    ImgWordComponent,
    GalleryComponent,
  ]
})
export class ShareModule { }
