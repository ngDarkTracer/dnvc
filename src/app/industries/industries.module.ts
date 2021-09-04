import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';


@NgModule({
  declarations: [
    IndustriesComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ]
})
export class IndustriesModule{}
