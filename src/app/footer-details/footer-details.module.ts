import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterDetailsRoutingModule } from './footer-details-routing.module';
import { FooterDetailsComponent } from './footer-details.component';


@NgModule({
  declarations: [
    FooterDetailsComponent
  ],
  imports: [
    CommonModule,
    FooterDetailsRoutingModule
  ]
})
export class FooterDetailsModule { }
