import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterDetailsRoutingModule } from './footer-details-routing.module';
import { FooterDetailsComponent } from './footer-details.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    FooterDetailsComponent
  ],
  imports: [
    CommonModule,
    FooterDetailsRoutingModule,
    TranslateModule,
    NgxDocViewerModule,
    SkeletonModule
  ]
})
export class FooterDetailsModule { }
