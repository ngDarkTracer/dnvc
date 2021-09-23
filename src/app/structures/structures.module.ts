import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuresRoutingModule } from './structures-routing.module';
import { StructuresComponent } from './structures.component';


@NgModule({
  declarations: [
    StructuresComponent
  ],
  imports: [
    CommonModule,
    StructuresRoutingModule
  ]
})
export class StructuresModule { }
