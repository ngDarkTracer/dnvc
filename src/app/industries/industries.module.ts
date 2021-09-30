import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from "@ngx-translate/core";
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    IndustriesComponent
  ],
    imports: [
        CommonModule,
        IndustriesRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule
    ]
})
export class IndustriesModule{}