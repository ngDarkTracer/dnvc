import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryRoutingModule } from './industry-routing.module';
import { IndustryComponent } from './industry.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    IndustryComponent
  ],
    imports: [
        CommonModule,
        IndustryRoutingModule,
        NgxPaginationModule,
        TranslateModule
    ]
})
export class IndustryModule { }
