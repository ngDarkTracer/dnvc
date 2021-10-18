import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    TranslateModule,
    ProgressSpinnerModule,
    NgxPaginationModule
  ]
})
export class ResourcesModule { }
