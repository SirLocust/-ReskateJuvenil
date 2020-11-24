import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { BodyDonationComponent } from './components/body-donation/body-donation.component';


@NgModule({
  declarations: [BodyDonationComponent],
  imports: [
    CommonModule,
    DonationRoutingModule,
    ShareModule,
  ]
})
export class DonationModule { }
