import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from "@ngx-translate/core";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    MarketsComponent
  ],
    imports: [
        CommonModule,
        MarketsRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule,
        SkeletonModule
    ]
})
export class MarketsModule { }
