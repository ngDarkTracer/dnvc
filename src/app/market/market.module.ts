import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    MarketComponent
  ],
    imports: [
        CommonModule,
        MarketRoutingModule,
        NgxPaginationModule,
        TranslateModule
    ]
})
export class MarketModule { }
