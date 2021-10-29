import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryRoutingModule } from './industry-routing.module';
import { IndustryComponent } from './industry.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DataViewModule} from 'primeng/dataview';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    IndustryComponent
  ],
    imports: [
        CommonModule,
        IndustryRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule,
        DataViewModule,
        AccordionModule,
        DropdownModule,
        CalendarModule,
        SkeletonModule
    ]
})
export class IndustryModule { }
