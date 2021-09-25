import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    MarketsComponent
  ],
    imports: [
        CommonModule,
        MarketsRoutingModule,
        NgxPaginationModule,
        TranslateModule
    ]
})
export class MarketsModule { }
