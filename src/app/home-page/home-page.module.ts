import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { BodyPageComponent } from './components/body-page/body-page.component';


@NgModule({
  declarations: [BodyPageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ShareModule
  ]
})
export class HomePageModule { }
