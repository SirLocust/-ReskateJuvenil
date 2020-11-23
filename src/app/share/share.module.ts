import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroImgComponent } from './components/hero-img/hero-img.component';
import { HeroColorComponent } from './components/hero-color/hero-color.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeroImgComponent, HeroColorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeroImgComponent,
    HeroColorComponent,
    FontAwesomeModule
  ]
})
export class ShareModule { }
