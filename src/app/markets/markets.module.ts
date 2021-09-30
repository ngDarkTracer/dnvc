import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from "@ngx-translate/core";
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    MarketsComponent
  ],
    imports: [
        CommonModule,
        MarketsRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule
    ]
})
export class MarketsModule { }
