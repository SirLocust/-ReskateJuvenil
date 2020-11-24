import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { BodyNosotrosComponent } from './components/body-nosotros/body-nosotros.component';


@NgModule({
  declarations: [BodyNosotrosComponent],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    ShareModule,
  ]
})
export class NosotrosModule { }
