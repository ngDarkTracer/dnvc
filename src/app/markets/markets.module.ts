import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    MarketsComponent
  ],
    imports: [
        CommonModule,
        MarketsRoutingModule,
        NgxPaginationModule
    ]
})
export class MarketsModule { }
