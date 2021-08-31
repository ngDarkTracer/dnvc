import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourZeroFourRoutingModule } from './four-zero-four-routing.module';
import { FourZeroFourComponent } from './four-zero-four.component';


@NgModule({
  declarations: [
    FourZeroFourComponent
  ],
  imports: [
    CommonModule,
    FourZeroFourRoutingModule
  ]
})
export class FourZeroFourModule { }
