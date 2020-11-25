import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { BodyGalleryComponent } from './components/body-gallery/body-gallery.component';


@NgModule({
  declarations: [BodyGalleryComponent],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    ShareModule,
  ]
})
export class GalleryPageModule { }
