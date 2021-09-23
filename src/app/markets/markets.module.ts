import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';


@NgModule({
  declarations: [
    MarketsComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule
  ]
})
export class MarketsModule { }
