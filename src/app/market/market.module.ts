import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    MarketComponent
  ],
    imports: [
        CommonModule,
        MarketRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule
    ]
})
export class MarketModule { }
