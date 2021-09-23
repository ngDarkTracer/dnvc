import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectorRoutingModule } from './sector-routing.module';
import { SectorComponent } from './sector.component';


@NgModule({
  declarations: [
    SectorComponent
  ],
  imports: [
    CommonModule,
    SectorRoutingModule
  ]
})
export class SectorModule { }
