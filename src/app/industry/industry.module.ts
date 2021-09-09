import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryRoutingModule } from './industry-routing.module';
import { IndustryComponent } from './industry.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    IndustryComponent
  ],
    imports: [
        CommonModule,
        IndustryRoutingModule,
        NgxPaginationModule
    ]
})
export class IndustryModule { }
