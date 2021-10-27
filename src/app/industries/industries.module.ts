import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndustriesRoutingModule} from './industries-routing.module';
import {IndustriesComponent} from './industries.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    IndustriesComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    ProgressSpinnerModule,
    SkeletonModule
  ]
})
export class IndustriesModule {
}
